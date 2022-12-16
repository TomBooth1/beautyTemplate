import React from "react";
import styles from "../../styles/reviews.module.css";

export default function Reviews() {
  return (
    <section className={styles.reviews_con}>
      <div className={styles.text_con}>
        <p className={styles.review_text_title}>"Such an amazing experience! I’m very happy with my results,</p>
        <p className={styles.reviews_text}>
        Renee is a true expert, friendly, professional and very passionate."
        </p>
        <p className={styles.reviews_name}>
        – Ivna Eterovic
        </p>
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
