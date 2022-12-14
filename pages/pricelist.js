import React from "react";
import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import PageHeader from "../components/pageHeader/pageHeader";
import styles from "../styles/pricelist.module.css";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <section className={styles.pricelist_page}>
      <Head>
        <title>Pricelist - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
<NavBar/>

      <PageHeader title="Pricelist" src="/welcome_4.png" />

      <section className={styles.pricelist_con}>
      <div className={styles.pricelist_border}>
        <h1 className={styles.pricelist_title}>Revolax Derma Filler</h1>
        <h1 className={styles.pricelist_title}>Lips</h1>
        <p className={styles.pricelist_text}> 0.5ML £90 </p>
        <p className={styles.pricelist_text}> 0.7ML £120 </p>
        <p className={styles.pricelist_text}> 1.1ML £140 </p>
        <h1 className={styles.pricelist_title}>Cheeks</h1>
        <p className={styles.pricelist_text}> 1.1ML £140 </p>
        <p className={styles.pricelist_text}> 2.0ML £200 </p>
        <h1 className={styles.pricelist_title}>Jaw</h1>
        <p className={styles.pricelist_text}> 1.1ML £140 </p>
        <p className={styles.pricelist_text}> 2.0ML £200 </p>
        <h1 className={styles.pricelist_title}>Chin</h1>
        <p className={styles.pricelist_text}> 1.1ML £140 </p>
        <h1 className={styles.pricelist_title}>Nose Augmentation</h1>
        <p className={styles.pricelist_text}> £140 </p>
        <p className={styles.pricelist_text}> Tear troughs 2 sessions £140<br/>(Under eye filler, using only Teosyal Redensity 2) </p>
        <h1 className={styles.pricelist_title}>Marionette Lines</h1>
        <p className={styles.pricelist_text}> 1ML £140 </p>
        <h1 className={styles.pricelist_title}>Kim K Package</h1>
        <p className={styles.pricelist_text}> 3ML £250 </p>
        <p className={styles.pricelist_text}> 4ML £300 </p>
        <p className={styles.pricelist_text}> 5ML £400 </p>
        <p className={styles.pricelist_text}> 6ML £500 </p>
        <p className={styles.pricelist_text}> Facial Contouring Packages available 3-6ML with discounts. <br/> This includes: Jaw, Chin, Lips, Cheeks and Nose. </p>

    </div>
      </section>
    </section>
  );
}
