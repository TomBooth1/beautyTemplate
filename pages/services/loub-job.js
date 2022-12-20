import React from "react";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function LoubJob() {
  const faq = {
    desc1:
      "Have you ever heard of a ‘Loub Job’ before? If you are a fan of wearing high heels, then you definitely need to learn about this helpful, safe and innovative treatment.",

    desc2:
      "Wearing heels puts extra pressure on the balls of your feet. These shoes may look fabulous, but can leave you in pain. Metatarsalgia is the technical term for the condition that frequently wearing heels can result in. Its symptoms are aching, burning feet, as well as sore and tired legs. Does this sound familiar?",

    desc3:
      "In order to treat this problem, Doctor Suzanne Levine, a top New York podiatrist, developed the ‘Loub Job’. This procedure utilises both Botox® and Dermal Fillers to keep you comfortable and able to dance all night long! Its name is a reference to Christian Louboutins, some of the most sought-after shoes on the market.",

    desc4:
      "Botox® is injected into four areas of the foot, which prevents the feet from sweating and expanding, things that often make shoes feel uncomfortable. Following this, filler is injected into the balls of the feet. This creates a cushioning effect, stopping you from experiencing pain in this sensitive area.",

    // ------------------------------------------------
    faq1: "Is It Painful?",

    an1: "In a word, no! You may experience a light numbing sensation, but that’s it. A Loub Job is frequently referred to as a ‘lunchtime treatment’ as you can pop into the clinic on your lunch break, have the procedure done and walk straight out - no downtime required!",

    an1_2: "",

    an1_3: "",
    // ----------------------------------------------
    faq2: "How Long Will It Take?",

    an2: "As mentioned above, a Loub Job is often considered a ‘lunchtime treatment’. This is not just because it does not require any time away from usual activities, but also because of how quickly it can be completed. The whole process typically takes between just 15 and 20 minutes!",

    an2_2: "",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "Will It Change How My Feet Look?",

    an3: "This procedure will not change the appearance of your feet. It will simply add some cushioning to the balls of your feet, where it is needed.",

    an3_2: "",

    an3_3: "",
    // -------------------------------------------------
    faq4: "How Long Do Results Last?",

    an4: "Results can last for up to a whole year! Usually, this should be a minimum of nine months, however, as with any treatment, this ranges from person to person. Some clients decide to have a top-up treatment after the first six months, this is not a necessity, but does offer the best maintenance of results.",

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
        <title>Loub Job - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Loub Job" src="/loub.png" />

      <PageMain questions={faq} title="Loub Job" />
      <Footer />
    </div>
  );
}
