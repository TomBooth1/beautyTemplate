import React from "react";
import styles from "../../styles/intro.module.css";
import Image from "next/image";

export default function Intro() {
  return (
    <section className={styles.intro_container}>
    <div className={styles.div_container}>
      <div className={styles.intro_text_container}>
        <h1 className={styles.intro_heading}>
          Aesthetics in the heart of Royal Leamington Spa
        </h1>
        <p className={styles.intro_text}>
          My name is Renee Ingram & I am the face behind company RI Aesthetics.
          My background is dentistry and Psychotherapy. I Made the transition to
          Aesthetics 5 years ago, and have been transforming lives ever since.
        </p>
      </div>
        <Image
          className={styles.intro_image}
          src="/logo1.png"
          alt="RI Aesthetics"
        />
      </div>
    </section>
  );
}
