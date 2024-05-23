import style from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import menuIcon from "../../assets/nav/menuIcon.png"
import closeIcon from "../../assets/nav/closeIcon.png"


import React from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className={style.navbar}>
            <a className={style.title} href="/">Jayanth B R</a>
            <div className={style.menu}>
                <img
                    className={style.menuBtn}
                    src={menuOpen ? closeIcon : menuIcon}
                    alt="menuIcon"
                    onClick={() => {
                        setMenuOpen((prev) => !prev)
                    }}
                />
                {console.log("ddd = ", getImageUrl("nav/menuIcon.png"))}
                <ul
                    className={`${style.menuItem} ${menuOpen && style.menuOpen}`}
                    onClick={() => {
                        setMenuOpen((prev) => !prev)
                    }}
                >
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
