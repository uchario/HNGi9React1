import styles from './Footer.module.css';

let zuriInternship = "https://internship.zuri.team/",
    ingressive = "https://ingressive.org/",
    ingressiveImage = "https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1",
    zuriImage = "https://internship.zuri.team/static/media/logo.36d2d48a.svg";

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <a href={zuriInternship} target="_blank" rel='noreferrer'><img src={zuriImage} alt="Hello world"/></a>
            <span>HNG Internship 9 Frontend Task</span>
            <a href={ingressive} target="_blank" rel='noreferrer'><img src={ingressiveImage} alt="Hello world"/></a>
        </footer> 
    );
}

export default Footer;