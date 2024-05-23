import style from "./Hero.module.css"
import profile from "../../assets/hero/heroImage.png"

import React from 'react'

export default function Hero() {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hi, I'm Jayanth</h1>
            <p className={style.discription}>
            Full-Stack Development Enthusiast!  For the past few months, I've been actively learning React for building user interfaces and Spring Boot for backend functionalities. 
            Reach out if you’d like to learn more!
            </p>
            <a className={style.contactBtn} href="mailto:jayanthbychana@gmail.com">Contact me</a>
        </div>
        <img className={style.heroImg} src={profile} alt="Hero-profile" />
        <div className={style.topBlur}></div>
        <div className={style.BottomBlur}></div>
    </section>
  )
}
