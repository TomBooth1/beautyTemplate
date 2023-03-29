import React from "react";
import Head from "next/head";
import NavBar from "../components/navBar/navBar";
import PageHeader from "../components/pageHeader/pageHeader";
import styles from "../styles/clinics.module.css";
import Image from "next/image";
import Footer from "../components/footer/footer";

export default function ServicesPage() {
  return (
    <section>
      <Head>
        <title>Clinics - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Clinics" src="/welcome_4.png" />

      <section className={styles.clinics_con}>
        <div className={styles.all_clinics_con}>
          <div className={styles.clinics_card}>
            <div className={styles.img_frame}>
              <img
                className={styles.card_img}
                src="/clinic1.png"
                alt="Birmingham Clinic Interior"
              />
            </div>
            <h1 className={styles.clinics_card_title}>Birmingham Clinic</h1>
            <p className={styles.address}>
              First House, Sutton street, Birmingham, B1 1PE
            </p>
          </div>

          <div className={styles.clinics_card}>
            <div className={styles.img_frame}>
              <img
                className={styles.card_img}
                src="/clinic4.png"
                alt="Birmingham Clinic Interior"
              />
            </div>
            <h1 className={styles.clinics_card_title}>London Clinic</h1>
            <p className={styles.address}>
              First House, Sutton street, Birmingham, B1 1PE
            </p>
          </div>

          <div className={styles.clinics_card}>
            <div className={styles.img_frame}>
              <img
                className={styles.card_img}
                src="/clinic2.png"
                alt="Birmingham Clinic Interior"
              />
            </div>
            <h1 className={styles.clinics_card_title}>Leamington Clinic</h1>
            <p className={styles.address}>
              36 regent st, Leamington spa, CV32 5EG
            </p>
          </div>

          <div className={styles.clinics_card}>
            <div className={styles.img_frame}>
              <img
                className={styles.card_img}
                src="/clinic3.png"
                alt="Birmingham Clinic Interior"
              />
            </div>
            <h1 className={styles.clinics_card_title}>Wakefield Clinic</h1>
            <p className={styles.address}>
              13-15 Silver Street, Wakefield, West Yorkshire, WF1 1UY
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
