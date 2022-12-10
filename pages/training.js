import React from "react";
import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import PageHeader from "../components/pageHeader/pageHeader";
import styles from "../styles/training.module.css";

export default function ServicesPage() {
  return (
    <section>
      <Head>
        <title>Training Courses - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Training Courses" src="/welcome_4.png" />
      <section className={styles.training_con}>
        <h1 className={styles.training_title}>
          CPD and ARAP accredited Courses we offer
        </h1>
        <div className={styles.all_training_con}>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Basic dermal filler course</h1>
            <p className={styles.training_price}>£1999.00</p>
            <p className={styles.training_card_desc}>
              You will learn how to inject dermal filler into the lip area,
              nasolabial folds, cheeks and the marionette lines. Duration is one
              day intensive course with 6 hours pre reading recommended. You
              will get to work on at least 5 live models on the day gaining lots
              of practice. A course pdf manual will be provided and during
              training a medic and senior practitioner will be present to help
              you throughout your learning.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Advanced Dermal Filler</h1>
            <p className={styles.training_price}>£999.00</p>
            <p className={styles.training_card_desc}>
            Includes the liquid rhinoplasty (nose) jawline and under eye (tear trough) with use of a canulla.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Buttock filler course</h1>
            <p className={styles.training_price}>£999.00</p>
            <p className={styles.training_card_desc}>
            Anatomy of the hip and buttock region, Complications and how to deal with them, Patient suitability, Patient expectations, Product buying, Marketing for treatment, Equipment assembly and preparation, Anaesthesia application for region, Canulla usage, Bolus and fanning technique, Wound prepping and closure and Aftercare.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Anti wrinkle (Botox) Treatment</h1>
            <p className={styles.training_price}>£1500.00</p>
            <p className={styles.training_card_desc}>
            3 Areas including the forehead, crows feet and the frown area. You will learn how to purchase, mix, store and inject anti wrinkle toxin safely and professionally. Duration one day intensive course with 6 hours pre reading recommended with provided manual. We will set you up with a Botox prescriber with prescriber fee of £30 per script. For Insurance we help you gain insurance and are partners with many UK insurers. We can advise suppliers for dermal filler.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Vitamin B12</h1>
            <p className={styles.training_price}>£299.00</p>
            <p className={styles.training_card_desc}>
            Administration using deltoid injection. Benefits include better sleep, increased energy levels, better complexion, better hair growth better nutrient utilisation and many more.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>Aqualyx</h1>
            <p className={styles.training_price}>£498.96</p>
            <p className={styles.training_card_desc}>
            Very popular fat dissolver which can be used on the stomach, flanks, arms, face and neck.
            </p>
          </div>

          <div className={styles.training_card}>
            <h1 className={styles.training_card_title}>APDO thread course</h1>
            <p className={styles.training_price}>£998.94</p>
            <p className={styles.training_card_desc}>
            You will learn following: The classification of facial and body threads including PDO, mono and screw threads. How to purchase and store threads. Preparing the area before insertion of thread and aftercare of the wound after procedure is complete. Areas we will cover at course: Fox eye lift with PDO thread, Jowel lift with PDO thread, Cheek contour with PDO thread, Neck lift with mono thread, Lower face rejuvenation with mixed threads, Tear trough rejuvenation with mono thread.
            </p>
          </div>

        </div>
      </section>
    </section>
  );
}
