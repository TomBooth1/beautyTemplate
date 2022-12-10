import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";


export default function Sclerotherapy() {
  const faq = {
    desc1:
      "Spider veins are red, blue or purple veins that have become visible under the skin. Varicose veins differ in that they are usually blue, are thicker than spider veins and sometimes appear to ‘bulge’.",

    desc2:
      "Whilst not physically harmful, these imperfections can leave us feeling self-conscious. If the appearance of spider veins and/or varicose veins is preventing you from showing off your legs, this is the perfect treatment for you!",

    desc3:
      "Sclerotherapy is a great way to get rid of spider veins quickly and safely. Read on to explore our most frequently asked questions about the procedure.",

    desc4:
      "",


    
// ------------------------------------------------
     faq1: 
     "Why Do We Get Spider Veins And/Or Varicose Veins?",

    an1:
     "Spider veins and/or varicose veins are the result of damaged valves preventing the blood from flowing as it typically would. This should not represent a problem for your physical wellbeing, but may cause some distress.",

    an1_2:
      "",

    an1_3: 
    "",
// ----------------------------------------------
    faq2: 
    "Who Is Suitable For This Treatment?",

    an2:
     "If you have spider veins or varicose veins, then you are suitable for this treatment! However, we would advise not undergoing this procedure if you are pregnant.",

    an2_2:
      "",

    an2_3:
      "",
// ---------------------------------------------------
    faq3: 
      "What Is The Procedure Like?",

    an3:
     "We work to ensure that the procedure is as comfortable as it can possibly be. You may, however, experience minor stinging or cramps. If you feel significant levels of pain during the procedure, you should tell your practitioner.",

    an3_2:
      "",

    an3_3:
     "",
// -------------------------------------------------
faq4: 
    "Why Undergo Sclerotherapy?",

    an4: 
    "Many of our clients opt to undergo sclerotherapy due to aesthetic reasons. However, we also find that some individuals experience aching, swelling, burning and night cramps as a result of spider veins, in the affected and surrounding areas.",

    an4_2:
      "",

    an4_3: 
    "",
// ----------------------------------------------
    
    faq5: 
    "How Long Will Results Last?",

    an5: 
    "Following the treatment, it is highly doubtful that the treated veins will ever come back again. However, new veins may appear and be affected in the same manner. Should this happen, you can return for a repeat procedure.",

    an5_2:
      "",

    an5_3:
     "",

// ------------------------------------------------
    faq6:
    "Is There Any Downtime?",

    an6:
     "The finished result may not be fully visible for three to six weeks. You may experience bruising, small sores and raised red areas. These problems are only very short term and will naturally heal without intervention.",

    an6_2:
      "After treatment, you can get back to your normal activities immediately. We would advise that you wear light and loose fitting clothing on the day of the treatment to ensure you are as comfortable as possible when you leave us.",

    an6_3: 
    "",
  };

  return (
    <div className={styles.page_container}>
    <Head>
        <title>Sclerotherapy - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader title="Sclerotherapy – For Spider Veins
" src="/spiderVeins.png" />

      <PageMain questions={faq} />
    </div>
  );
}
