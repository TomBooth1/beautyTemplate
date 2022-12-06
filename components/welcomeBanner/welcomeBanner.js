import Image from "next/image";
import styles from "../../styles/welcomeBanner.module.css"
import React from 'react'

export default function WelcomeBanner() {
  return (
      <section className={styles.welcome_container}>
      <div className={styles.welcome_h_container}>
      <h1 className={styles.welcome_text}>RI AESTHETICS</h1>
      <p className={styles.tag_line}>FAT DISSOLVING INJECTIONS | LIP FILLERS | ANTI WRINKLE TREATMENTS</p>
      </div>
      
    {/* <img className={styles.welcome_img} src='/welcome-to-kb-facecontour-aesthetics copy.png' alt="Welcome to KB Face Contour Aesthetics"/> */}
    </section>
  )
}
