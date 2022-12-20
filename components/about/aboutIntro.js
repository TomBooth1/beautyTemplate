import React from "react";
import styles from "../../styles/aboutIntro.module.css";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className={styles.about_intro_con}>
      <div className={styles.img_con}>
        <Image
          className={styles.clinic_img}
          src="/clinic2.png"
          alt="Clinic Exterior"
        />
        <Image
          className={styles.clinic_img}
          src="/clinic1.png"
          alt="Clinic Interior"
        />
      </div>
      <div className={styles.desc_con}>
      <p className={styles.about_text_title}>Who are we?</p>

        <p className={styles.about_text}>
          3 years in the Aesthetics Industry have seen RI Aesthetics starting
          with a practice in Leamington Spa and quickly expanding to Birmingham,
          London and Bristol.
        </p>
        <p className={styles.about_text}>
          Now with David Porter on board our Training Academys are also going from
          strength to strength, expanding nationwide to bring through the
          next generation of Aesthetic Practioners.
        </p>
      </div>
    </section>
  );
}
