import React from "react";
import styles from "../../styles/aboutClinics.module.css";
import Image from "next/image";
export default function AboutClinics() {
  return (
    <section className={styles.about_clinics_con}>
      <div className={styles.text_con}>
        <p className={styles.clinics_text_title}>Clinic Adresses</p>
<div className={styles.clinics_text_div}>
        <p className={styles.clinics_text}>
          First House <br />
          Sutton street
          <br />
          Birmingham
          <br />
          B1 1PE
          <br />
        </p>

        <p className={styles.clinics_text}>
          1 Harley Street
          <br />
          London
          <br />
          W1G 6AG
          <br />
        </p>

        <p className={styles.clinics_text}>
          36 Regent St
          <br />
          Leamington Spa
          <br />
          CV32 5EG
          <br />
        </p>
</div>
      </div>

      <div className={styles.img_con}>

        <img
          className={styles.clinic_img}
          src="/clinic3.png"
          alt="Clinic Interior"
        />

        <img
          className={styles.clinic_img}
          src="/clinic4.png"
          alt="Clinic Exterior"
        />

      </div>

    </section>
  );
}
