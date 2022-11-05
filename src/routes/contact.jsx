import { useState, useRef } from 'react';

import { Form } from 'react-router-dom';

import styles from './contact.module.css';

const name = 'Arich';

const Contact = () => {
    const firstnameInputRef = useRef();
    const lastnameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();
    const checkboxInputRef = useRef();

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);

    const firstNameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setFirstNameError(false);
        }
    }

    const lastNameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setLastNameError(false);
        }
    }

    const emailChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setEmailError(false);
        }
    }

    const messageChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setMessageError(false);
        }
    }

    const checkboxChangeHandler = (event) => {
        if (event.target.checked) {
            setCheckboxError(false);
        }
    };

    const contactSubmitHandler = (event) => {
        event.preventDefault();
        const enteredFirstname = firstnameInputRef.current.value;
        const enteredLastname = lastnameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;
        const checkBox = checkboxInputRef.current.checked;
        
        if (enteredFirstname.trim().length === 0) {
            setFirstNameError(true);
            return;
        }

        if (enteredLastname.trim().length === 0) {
            setLastNameError(true);
            return;
        }

        if (enteredEmail.trim().length === 0) {
            setEmailError(true);
            return;
        }

        if (enteredMessage.trim().length === 0) {
            setMessageError(true);
            return;
        }

        if (!checkBox) {
            setCheckboxError(true);
            return;
        }

        alert("Form submitted!");

    };

    return (
        <div id='main' className={`${styles.main}`}>
            <div className={`${styles.header}`}>
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about about anything you have in mind.</p>
            </div>

            <Form method='post' onSubmit={contactSubmitHandler} className={`${styles.form}`}>
                <div className={`${styles['name-wrap']}`}>
                    <div className={`${styles.name} ${firstNameError && styles.error}`}>
                        <label htmlFor='first_name'>First name</label>
                        <input 
                            type='text' 
                            name='first_name' 
                            id='first_name'
                            placeholder='Enter you first name'
                            ref={firstnameInputRef}
                            onChange={firstNameChangeHandler}
                        />
                        {firstNameError && <span>Please enter your first name</span>}
                    </div>
                    <div className={`${styles.name} ${lastNameError && styles.error}`}>
                        <label htmlFor='last_name'>Last name</label>
                        <input 
                            type='text' 
                            name='last_name' 
                            id='last_name'
                            placeholder='Enter your last name'
                            ref={lastnameInputRef}
                            onChange={lastNameChangeHandler}
                        />
                        {lastNameError && <span>Please enter your last name</span>}
                    </div>
                </div>
                
                <div className={`${styles.email} ${emailError && styles.error}`}>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        name='email' 
                        id='email'
                        placeholder='yourname@email.com'
                        ref={emailInputRef}
                        onChange={emailChangeHandler}
                    />
                    {emailError && <span>Please enter your email</span>}
                </div>

                <div className={`${styles.message} ${messageError && styles.error}`}>
                    <label htmlFor='message'>Message</label>
                    <textarea 
                        name='message' 
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        ref={messageInputRef}
                        onChange={messageChangeHandler}
                    />
                    {messageError && <span>Please enter a message</span>}
                </div>
                
                <div className={`${styles.checkbox} ${checkboxError && styles.error}`}>
                    <input 
                        type='checkbox' 
                        name='check__agree' 
                        id='check__agree'
                        onChange={checkboxChangeHandler}
                        ref={checkboxInputRef}
                    />
                    <label htmlFor='check__agree'>You agree to provide your data to {name} who may contact you.</label>
                    {checkboxError && <span>Please tick the checkbox</span>}
                </div>
               

                <div className={`${styles.button}`}>
                    <button type='submit' id='btn__submit'>Send message</button>
                </div>
               
            </Form>
        </div>
    );
};

export default Contact;