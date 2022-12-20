import React from "react";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function FillerDissolver() {
  const faq = {
    desc1:
      "Hyaluronidase is a substance that is used to dissolve hyaluronic acid fillers. There are a number of reasons why an individual may choose to undergo this procedure:",

    desc2:
      "Overfilling – Here at KB Face Contour Aesthetics, we are incredibly proud of the subtle, natural results that we produce. Unfortunately, not all clinics are the same! Occasionally, overfilling can be a problem, and this occurs when too much filler is injected into certain parts of the face. This results in an unnatural, unflattering look.",

    desc3:
      "Lumps and Bumps – It is important to get a properly qualified and experienced practitioner to administer your fillers. Without this, you may experience lumps and bumps. These feel unusual and may be extremely visible to the eye.",

    desc4:
      "Product Migration – This describes what happens when the filler moves from the location in which it was intended to settle. Again, this can generally be avoided by ensuring that you opt for a well-accredited practitioner.",

    desc5:
      "General Aesthetic – Sometimes, everything goes right, yet you’re still just not happy with your final look.",

    desc6:
      "Whatever the reason for choosing to dissolve your filler, hyaluronidase is a simple and effective solution.",

    // ------------------------------------------------
    faq1: "Is It Painful?",

    an1: "As with any injections, you may experience some redness, tenderness, bruising or swelling. This can be alleviated with ice packs and over-the-counter paracetamol. You can expect these issues to subside in just a day or two.",

    an1_2: "",

    an1_3: "",
    // ----------------------------------------------
    faq2: "How Fast Does It Work?",

    an2: "The filler begins to soften and break down immediately. After 48 hours, you should be able to see the real difference. It is important to remember that the injection of hyaluronidase itself can result in some swelling, meaning that its true effects will be hidden for a short amount of time.",

    an2_2: "",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "Can I Be Treated?",

    an3: "As long as you are not allergic to hyaluronidase, yes you can, regardless of your age, gender or skin type! You must not receive any anti-wrinkle injections 48 hours before or after this procedure.",

    an3_2: "",

    an3_3: "",
    // -------------------------------------------------
    faq4: "Can I Have Filler Again Afterwards?",

    an4: "Of course! You will need to wait until the area is fully healed before having more filler, but following that, it is perfectly safe to undergo filler treatments again.",

    an4_2:
      "We would only advise that you choose your next clinic very carefully... We will be waiting for your call!",

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
        <title>Hyaluronidase Filler Dissolve - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavBar />

      <PageHeader
        title="Hyaluronidase Filler Dissolver"
        src="/hyalFiller.png"
      />

      <PageMain questions={faq} title="Hyaluronidase Filler Dissolver" />
      <Footer />
    </div>
  );
}
