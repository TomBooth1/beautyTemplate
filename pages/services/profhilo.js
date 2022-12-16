import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function AntiWrinkle() {
  const faq = {
    desc1:
      "Profhilo® is a revolutionary treatment that utilises hyaluronic acid to improve skin tone, texture, hydration and overall radiance.",

    desc2:
      "Hyaluronic acid is a naturally produced substance famous for its ability to hold over 1000 times its weight in water. This means plump, moisturised and glowing skin!",

    desc3:
      "Profhilo® also helps to stimulate the production of collagen and elastin. These two substances are integral to the skin maintaining its elasticity, which stops you from getting fine lines and wrinkles.",

    desc4:
      "Book in for your first treatment today and correct the imperfections created by smoking, poor diet and the ageing process.",

    // ------------------------------------------------
    faq1: "How Many Treatments Should I Have?",

    an1: "As with all treatments, the results will vary from person to person. However, we would generally advise that you undergo two treatments four weeks apart. This will give you the best and longest-lasting results.",

    an1_2: "",

    an1_3: "",
    // ----------------------------------------------
    faq2: "What Is The Difference Between Profhilo® And Dermal Fillers?",

    an2: "Profhilo® and Dermal Fillers are often confused, or thought to be the same treatment, however there are key differences.",

    an2_2:
      "Dermal Fillers are used to enhance specific areas, such as the cheeks or lips, whereas Profhilo® is dispersed evenly throughout the face, giving a plumper and firmer look all round. Here at KB Face Contour Aesthetics, we also offer Dermal Fillers, which are ideal if you have specific problem areas such as your lips, jaw, cheeks or chin.",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "What Results Can I Expect From Profhilo® ?",

    an3: "A single course of Profhilo® involves two injectable treatments spaced one month apart. You can expect to enjoy the effects of intense hydration, with your skin looking healthier and plumper. You will also notice the reduction, or complete disappearance, of fine lines and wrinkles.",

    an3_2:
      "The improvement in skin texture will be undeniable! You will be glowing - not only due to the physical effects of the treatment, but also because of the confidence that the results will bring about.",

    an3_3: "",

    an3_4: "",

    an3_5: "",

    an3_6: "c",

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
        <title>Profhilo® - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Profhilo®" src="/profhilo.png" />

      <PageMain questions={faq} title="Profhilo®" />
      <Footer />
    </div>
  );
}
