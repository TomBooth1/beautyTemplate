import React from "react";
import Head from "next/head";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";

export default function BumFiller() {
  const faq = {
    desc1:
      "There’s no debating it, bums are big right now – and we don’t just mean in terms of Insta popularity, we mean literally!",

    desc2:
      "Instagram is full of gorgeous girls showing off their perfect peachy butts alongside #squats… BUT, for a lot of these Insta models, the story doesn’t end with just spending hours in the gym… they have also had a little helping hand from fillers.",

    desc3:
      "Fillers are a safe, effective way to alter the shape and size of your bum, leaving you feeling your best self, and filling out your jeans like a Kardashian.",

    desc4: "",

    // ------------------------------------------------
    faq1: "Who Is Suitable For This Treatment?",

    an1: "This treatment is suitable for anyone and everyone (providing you are over the age of 18). Fillers are minimally invasive, which makes them much safer than their surgical alternatives.",

    an1_2: "",

    an1_3: "",
    // ----------------------------------------------
    faq2: "What Is The Procedure Like?",

    an2: "Wherever needles are involved, you are going to experience some mild discomfort, however, this is minimal and short term. Plus, our team are really friendly and chatty, so they will keep you distracted from the procedure.",

    an2_2: "",

    an2_3: "",
    // ---------------------------------------------------
    faq3: "How Long Will Results Last?",

    an3: "Bum fillers are not permanent, but they do last for a long time. After your first treatment, you will not need to come in and see us again for several years! Of course, if you want to add a little extra (once the initial fillers are fully settled), or when the results begin to disappear, you can just pop in for a top-up!",

    an3_2:
      "What’s more, the results are instantaneous. Whilst you may need a short period of time to fully heal, the effect will be noticeable straight away.",

    an3_3: "",

    an3_4: "",

    an3_5: "",

    an3_6: "",

    // -------------------------------------------------
    faq4: "Is There Any Downtime?",

    an4: "Downtime is just a matter of minutes or hours. When you leave us, you can carry on with your life as you normally would.",

    an4_2:
      "This is the great thing about opting for a non-surgical treatment. You get excellent results, but don’t have to spend time healing!",

    an4_3:
      "There may be times where you experience some minor discomfort in the treated area, and it is quite common to develop minor bruising. This will only last for a short period of time.",
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
        <title>Bum Filler - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Bum Filler" src="/bumFiller.png" />

      <PageMain questions={faq} title="Bum Filler" />
      <Footer />
    </div>
  );
}
