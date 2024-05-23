import React from 'react'
import styles from "./Contact.module.css"
import emailIcon from "../../assets/contact/emailIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"

export default function Contact() {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.content}>Feel free to reach out !</p>
            </div>
            <div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <a className={styles.linkImageContainer} href="mailto:jayanthbychana@gmail.com" targer="_blank">
                            <img className={styles.linkImage} src={emailIcon} alt="emailIcon" />
                        </a>
                        
                    </li>
                    <li className={styles.link}>
                        <a className={styles.linkImageContainer} href="https://www.linkedin.com/in/jayanth-b-r-a1a1b7235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" targer="_blank">
                            <img className={styles.linkImage} src={linkedinIcon} alt="linkedinIcon" />
                        </a>
                      
                    </li>
                    <li className={styles.link}>
                        <a className={styles.linkImageContainer} href="https://github.com/BR-Jayanth" targer="_blank">
                            <img className={styles.linkImage} src={githubIcon} alt="githubIcon" />
                        </a>
                        

                    </li>
                </ul>
            </div>

        </footer>
    )
}
{/* <footer className={styles.container} id='contact'>
<div className={styles.text}>
    <h1 className={styles.title}>Contact</h1>
    <p className={styles.content}>Feel free to reach out !</p>
</div>
<div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <a className={styles.linkImageContainer} href="mailto:jayanthbychana@gmail.com">
                <img className={styles.linkImage} src={emailIcon} alt="emailIcon" />
            </a>
            <a href="mailto:jayanthbychana@gmail.com" className={styles.linkPath}>jayanthbychana@gmail.com</a>
        </li>
        <li className={styles.link}>
            <a className={styles.linkImageContainer} href="https://www.linkedin.com/in/jayanth-b-r-a1a1b7235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img className={styles.linkImage} src={linkedinIcon} alt="linkedinIcon" />
            </a>
            <a href="https://www.linkedin.com/in/jayanth-b-r-a1a1b7235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.linkPath}>linkedin.in/jayanth B R</a>
        </li>
        <li className={styles.link}>
            <a className={styles.linkImageContainer} href="https://github.com/BR-Jayanth">
                <img className={styles.linkImage} src={githubIcon} alt="githubIcon" />
            </a>
            <a href="https://github.com/BR-Jayanth" className={styles.linkPath}>githhub.com/br-jayanth</a>

        </li>
    </ul>
</div>

</footer> */}