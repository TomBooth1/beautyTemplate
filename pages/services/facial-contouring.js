import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function KimK() {
  const faq = {
    desc1:
      "One of the most popular treatments here at KB Aesthetics and Face Contour is our Kim K (Or Kimmy K) package.This treatment focuses on three areas of the face: the jawline, chin and cheeks.",

    desc2:
      "With filler, we can create a more chiselled appearance as well as highlight and emphasise your cheekbones and jawline.",

    desc3:
      "We use between 3 and 6ml of dermal filler. The amount used will depend on your bone structure, age, skin type and personal preference. All our treatments are tailored to suit our clients perfectly, ensuring beautiful, effective results, whilst helping to maintain a natural appearance.",

    desc4:
      "If you’ve always wanted the Kim K look (who wouldn’t!?) but you are not a makeup magician, this is the perfect option for you. Even if you are a makeup queen and would just like to dramatically reduce the time that you have to spend contouring in the mirror, the Kim K package has your name all over it.",

    // ------------------------------------------------
    faq1: "Who Is The Kim K Package Suitable For?",

    an1: "This treatment is suitable for anyone over the age of 18. If you feel self-conscious about your jawline, chin and/or cheekbones, then you will be delighted with the results!",

    an1_2:
      "Just make sure that you are undergoing this treatment for YOU! We believe in empowering our clients to feel like their best selves, if you feel that this procedure will bring you joy, then get booked in today!",

    an1_3: "",
    // ----------------------------------------------
    faq2: "What Is The Procedure Like?",

    an2: "As you can probably imagine, the treatment can be somewhat uncomfortable, however, any discomfort is minimal and the results definitely make it worth it!",

    an2_2: "",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "How Long Will Results Last?",

    an3: "The Kim K package offers long-term (but not permanent) results. The full effects of the treatment typically last for around a year, however, this varies from person to person and will depend upon your natural metabolism.",

    an3_2:
      "Remember, you can always come in for a top-up when the effects begin to dwindle.",

    an3_3: "",
    // -------------------------------------------------
    faq4: "Is There Any Downtime?",

    an4: "Following the treatment, you can get back to your normal activities pretty much straight away. There may be some minor redness, swelling and bruising, but this will disappear in just a few days.",

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
        <title>Facial Contouring - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader
        title="Facial Contouring (The Kim K Package)"
        src="/kimK.png"
      />

      <PageMain questions={faq} title="Facial Contouring (The Kim K Package)" />
      <Footer />
    </div>
  );
}
