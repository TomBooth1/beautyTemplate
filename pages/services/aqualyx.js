import React from "react";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function Aqualyx() {
  const faq = {
    desc1:
      "Aqualyx® is a revolutionary injectable treatment that involves the insertion of a solution into localised areas of hard-to-lose fat often found on the stomach, thighs, chin or hips.",

    desc2:
      "This liquifies the fat cells, which the body then naturally eliminates through the lymphatic system.",

    desc3:
      "It is the ideal alternative to undergoing liposuction, giving stunning results with very little downtime.",

    desc4:
      "The treatment is delivered by highly qualified and experienced professionals only, meaning you can relax in the knowledge that you are in safe hands.",

    // ------------------------------------------------
    faq1: "Does Aqualyx® Get Rid Of Cellulite?",

    an1: "Yes, which is amazing because most of us know that cellulite is so hard to get rid of, even with a good diet and plenty of exercise.",

    an1_2: "",

    an1_3: "",

    // ----------------------------------------------
    faq2: "Does It Help You Lose Weight?",

    an2: "No. Just like liposuction, Aqualyx® is not designed for weight loss, it is used for body contouring. The treatment targets specific areas, not the entirety, or large proportions of, the body.",

    an2_2:
      "This injectable treatment is perfect for individuals who are at a healthy weight, but have that little bit extra in a few places.",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "Who Can Have this Treatment?",

    an3: "Aqualyx® is the ideal fat reducing procedure for the majority of men and women aged between 18 and 60.",

    an3_2:
      "However, it is not suitable for those who are pregnant or breastfeeding.",

    an3_3:
      "It is also important to be at a healthy weight prior to treatment. This should not be treated as a weight loss procedure.",

    an3_4: "",

    an3_5: "",

    an3_6: "",

    // -------------------------------------------------
    faq4: "",

    an4: "",

    an4_2: "",

    an4_3: "",
    // ----------------------------------------------

    faq5: "",

    an5: "",

    an5_2: "",

    an5_3: "",

    // ------------------------------------------------
    faq6: "",

    an6: "",

    an6_2: "",

    an6_3: "",
  };

  return (
    <div className={styles.page_container}>
      <Head>
        <title>Aqualyx® - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Aqualyx®" src="/aqualyx.png" />

      <PageMain questions={faq} title="Aqualyx®" />
      <Footer />
    </div>
  );
}
