import React from 'react'
import styles from "./ContactNew.module.css"

export default function ContactNew() {
  return (
       <>
       <div className="container ">
       <div className="contact-form">

       <div className={styles.textContainer}>
           <h1 className={styles.title}>Contact</h1>
           <p className={styles.content}>Feel free to reach out !</p>
        </div>
            <form className={styles.formContainer} >
            {/* <form ref={form} onSubmit={sendEmail}> */}
              <ul>
                <li className={styles.inputField}>
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className={styles.inputField}>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li className={styles.inputField}>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    required
                  />
                </li>
                <li className={styles.inputField}>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className={styles.inputField}>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className={styles.formBtn}>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
       </div>
       </>
  )
}
