import React from 'react'
import styles from "./ProjectCard.module.css"

export default function ProjectCard(props) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.img} alt={props.project.title} />
            <h3 className={styles.title}>{props.project.title}</h3>
            <p className={styles.description}>
                {props.project.description}
            </p>
            <ul className={styles.skills}>
                {props.project.skills.map((skill, id) => {
                    return (
                        <li className={styles.skill} key={id}>{skill}</li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                {
                    props.project.live &&
                    <>
                        {

                            props.project.source.length == 1 ? <a className={styles.link} href={props.project.source} target='_blank'>Source</a>
                                :
                                <>
                                    <a className={styles.link} href={props.project.source[0]} target='_blank'>FE</a>
                                    <a className={styles.link} href={props.project.source[1]} target='_blank'>BE</a>
                                </>
                        }

                        <a className={styles.link} href={props.project.live} target='_blank'>Live</a>
                    </>
                }
            </div>
        </div>
    )
}
