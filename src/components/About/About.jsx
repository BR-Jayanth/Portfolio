import styles from "./About.module.css"
import aboutImage from "../../assets/about/aboutImage.png"
import cursorIcon from "../../assets/about/cursorIcon.png"
import serverIcon from "../../assets/about/serverIcon.png"
import UriIcon from "../../assets/about/uiIcon.png"

import React from 'react'

export default function About() {
    return (

        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={aboutImage} alt="about-image" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img  src={cursorIcon} alt="cursor-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I’m a Front-end developer, Learning
                                to building responsive and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverIcon} alt="server-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I’m a Back-end developer, Actively learning how to develop efficient back-end systems and APIs. I'm excited to apply these skills to real-world projects.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem} style={{display:"none"}}>
                        <img src={UriIcon} alt="Uri-Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and
                                have created design systems as well
                            </p>
                        </div>

                    </li>
                </ul>
            </div>


        </section>



        // <div className={styles.container}>
        //     <div className={styles.imagecontainer}>
        //         <h2 className={styles.imagetitle}>About</h2>
        //         <img className={styles.aboutimage} src={aboutImage} alt="about-image" />
        //     </div>
        //     {/* <div className={style.hero-content-container}>
        //         <div>
        //             <h3>Frontend Developer</h3>
        //             <img src={cursorIcon} alt="cursor-Icon" />
        //             <p>
        //                 I’m a Front-end developer, Learning
        //                 to building responsive and optimized sites
        //             </p>
        //         </div>
        //         <div>
        //             <h3>Backend Developer</h3>
        //             <img src={serverIcon} alt="cursor-Icon" />
        //             <p>
        //                 I’m a Back-end developer, Actively learning how to develop efficient back-end systems and APIs. I'm excited to apply these skills to real-world projects.
        //             </p>
        //         </div>
        //         <div>
        //             <h3>UI Designer</h3>
        //             <img src={UriIcon} alt="cursor-Icon" />
        //             <p>
        //                 I have designed multiple landing pages and
        //                 have created design systems as well
        //             </p>
        //         </div>
        //     </div> */}
        // </div>
    )
}
