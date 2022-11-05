import { Fragment, useState } from 'react';

import { Link } from 'react-router-dom';

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
    gitHub = "https://github.com/",
    slack = "https://slack.com";

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
                    <h4>Arichinho Tarantula</h4>
                    <p hidden>Arich</p>
                </section>
                <section className={`${styles.links}`}>
                    <p><a href={twitterLink} target="_blank" rel='noreferrer'>Twitter Link</a></p>
                    <p><a href={zuriTeam} id="btn__zuri" target="_blank" rel='noreferrer'>Zuri Team</a></p>
                    <p><a href={zuriBooks} id="books" target="_blank" rel='noreferrer'>Zuri Books</a></p>
                    <p><a href={zuriPython} id="book__python" target="_blank" rel='noreferrer'>Python Books</a></p>
                    <p><a href={zuriPitch} id="pitch" target="_blank" rel='noreferrer'>Backgroud Check for Coders</a></p>
                    <p><a href={zuriDesign} id="book__design" target="_blank" rel='noreferrer'>Design Books</a></p>
                    <p><Link to={`contact`}>Contact Me</Link></p>
                </section>
                <section className={`${styles.icons}`}>
                    <a href={slack} target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faSlack}/></a>
                    <a href={gitHub} target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                </section>
            </div>
        </Fragment>
    );
}

export default Main;