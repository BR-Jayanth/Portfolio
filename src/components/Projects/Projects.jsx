import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Projects() {

    const projectArray = projects.map((project, index) => {
        const img = require(`../../assets/${project.imageSrc}`)
        return (
           <ProjectCard key={index} project={project} img={img}/>
        )
    })

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projectArray
                }
            </div>
        </section>
    )
}
