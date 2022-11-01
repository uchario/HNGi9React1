import { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, } from '@fortawesome/free-solid-svg-icons'
import { faSlack, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Main.module.css';

import profileImage from '../assets/arich.jpg';

let twitterLink = "https://twitter.com/aritarant",
    zuriTeam = "https://training.zuri.team/",
    zuriBooks = "http://books.zuri.team",
    zuriPython = "https://books.zuri.team/python-for-beginners?ref_id=arich",
    zuriPitch = "https://background.zuri.team",
    zuriDesign = "https://books.zuri.team/design-rules",
    zuriInternship = "https://internship.zuri.team/",
    ingressive = "https://ingressive.org/",
    gitHub = "https://github.com/",
    slack = "https://slack.com",
    ingressiveImage = "https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1",
    zuriImage = "https://internship.zuri.team/static/media/logo.36d2d48a.svg";


const Main = () => {
    const [image, setImage] = useState(profileImage);

    const imageUploadHandler = (event) => {
        console.log(event.target.files);
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <Fragment>
            <div className={`${styles.main}`}>
                <section>
                    <div className={`${styles['profile-image']}`}>
                        <img src={image} alt="Hello world"/>
                        <input type="file" onChange={imageUploadHandler}/>
                        <span>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                    </div>
                    <h4>Annette Black</h4>
                    <p hidden>Arich</p>
                </section>
                <section className={`${styles.links}`}>
                    <p><a href={twitterLink} target="_blank" rel='noreferrer'>Twitter Link</a></p>
                    <p><a href={zuriTeam} id="btn__zuri" target="_blank" rel='noreferrer'>Zuri Team</a></p>
                    <p><a href={zuriBooks} id="books" target="_blank" rel='noreferrer'>Zuri Books</a></p>
                    <p><a href={zuriPython} id="book__python" target="_blank" rel='noreferrer'>Python Books</a></p>
                    <p><a href={zuriPitch} id="pitch" target="_blank" rel='noreferrer'>Backgroud Check for Coders</a></p>
                    <p><a href={zuriDesign} id="book__design" target="_blank" rel='noreferrer'>Design Books</a></p>
                </section>
                <section className={`${styles.icons}`}>
                    <a href={slack} target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faSlack}/></a>
                    <a href={gitHub} target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </section>
            </div>

            

            <footer className={`${styles.footer}`}>
                <a href={zuriInternship} target="_blank" rel='noreferrer'><img src={zuriImage} alt="Hello world"/></a>
                <span>HNG Internship 9 Frontend Task</span>
                <a href={ingressive} target="_blank" rel='noreferrer'><img src={ingressiveImage} alt="Hello world"/></a>
            </footer> 

        </Fragment>
    );
}

export default Main;