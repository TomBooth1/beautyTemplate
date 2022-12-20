import React from "react";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function Rhinoplasty() {
  const faq = {
    desc1:
      "Non-Surgical Rhinoplasty sounds a lot more complicated than it is. It’s actually the easiest and most non-invasive way to alter the shape of your nose. People tend to assume that surgical rhinoplasty (or a nose job) is the only option available to them but this simply isn’t true.",

    desc2:
      "Having a bumpy nose, or one with a flat bridge, can leave you feeling deflated. After all, your nose is a prominent feature of your face and when you’re unhappy with it, you can end up feeling displeased with your entire appearance. With a Non-Surgical Rhinoplasty, you can alter your nose without going under the knife, leaving you happier and more confident.",

    desc3:
      "This procedure is performed with hyaluronic acid-based dermal fillers. As hyaluronic acid is a naturally occuring substance in the body, this means that it is broken down over time, making the results of this procedure temporary and only lasting for up to 12 months.",

    desc4:
      "Non-Surgical Rhinoplasty can be used to correct any issues you have in the short term, which can be useful if you’re deciding on whether or not you would like to undergo surgical rhinoplasty in the future.",

    // ------------------------------------------------
    faq1: "Can I Have Non-Surgical Rhinoplasty?",

    an1: "As long as you’re over the age of 18, there are few reasons as to why you’d be unable to have Non-Surgical Rhinoplasty.",

    an1_2:
      "The treatment is mainly used to correct bumps, hooks and asymmetrical concerns. It can also reshape the tip of the nose and add definition.",

    an1_3: "",

    // ----------------------------------------------
    faq2: "Are There Any Side Effects?",

    an2: "During the procedure itself, you might experience some mild discomfort. This will be short-lived, as will any discomfort following the procedure. After treatment, you may also experience some slight swelling and bruising around the injection sites. This will subside within a few days.",

    an2_2: "",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "",

    an3: "",

    an3_2: "",

    an3_3: "",

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
        <title>Non-Surgical Rhinoplasty - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Non-Surgical Rhinoplasty" src="/rhino.png" />

      <PageMain questions={faq} title="Non-Surgical Rhinoplasty" />
      <Footer />
    </div>
  );
}
