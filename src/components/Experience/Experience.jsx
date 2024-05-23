import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"

export default function Experience() {
    const skillsArray = skills.map((skill, index) => {
        const img = require(`../../assets/${skill.imageSrc}`);
        return (
            <div key={index} className={styles.skill} >
                <div className={styles.skillImageContainer}>
                    <img src={img} alt={`${skill.title}`} />
                </div>
                <p>{skill.title}</p>
            </div>
        )
    })

    const experienceArray = history.map((item, index) => {
        const img = require(`../../assets/${item.imageSrc}`);
        return (
            <li key={index} className={styles.hitoryItem} >
                <img src={img} alt={item.organisation} />
                <div className={styles.historyItemDetails} >
                    <h3>{`${item.role}, ${item.organisation}`}</h3>
                    <p>{`${item.startDate} - ${item.endDate}`}</p>
                    <ul>
                        {item.experiences.map((exp, id) => {
                            return (
                                <li key={id}>
                                    {exp}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        )
    })

    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}></h2>{/* add Experience*/}
            <div className={styles.content}>
                <div className={styles.skills}>
                    <h2 className={styles.titleSKill}>Skill</h2>{/* remove this and also css*/}
                    {skillsArray}
                </div>
                <ul className={styles.history}>
                    <h2 className={styles.title}>Experience</h2>{/* remove this and also css*/}
                    {experienceArray}
                </ul>
            </div>
        </section>
    )
}
