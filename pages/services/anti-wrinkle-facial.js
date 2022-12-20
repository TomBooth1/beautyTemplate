import React from "react";
import NavBar from "../../components/navBar/navBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";


export default function AntiWrinkle() {
  const faq = {
    desc1:
      "Botulinum toxin, often referred to as Botox®, is the perfect way to treat fine lines and wrinkles. This protein works by relaxing the facial muscles, resulting in smooth, youthful-looking skin!",

    desc2:
      "The procedure involves a number of small injections into multiple areas of the face, Where these injections are placed will depend on your skin, and the areas that you feel most self-conscious about.",

    desc3:
      "Before the treatment, you will have a consultation with one of our qualified practitioners, who will examine your skin and discuss your goals. This allows them to tailor the treatment to suit you. We do not believe in a one-size-fits-all approach – we get to know all of our clients so that we can create bespoke solutions specifically for them.",

    desc4:
      "",


    
// ------------------------------------------------
     faq1: 
     "What Is The Procedure Like?",

    an1:
     "The first step is to talk to us and tell us exactly what you want, we will then work with you to create the perfect treatment plan. Once we have this, we are ready to go!",

    an1_2:
      "The procedure involves a number of injections into different areas of the face. The needles used are particularly fine, making the treatment almost painless. However, despite not being painful, this can be stressful for those who are nervous about getting injections. If this is the case, just let us know and our friendly staff will do everything they can to keep you as relaxed as possible.",

    an1_3: 
    "",
// ----------------------------------------------
    faq2: 
    "Will My Face Look Natural?",

    an2:
     "Most of us have seen photos of individuals who have had ‘too much’ Botox®, and have been left looking unnatural and expressionless. However, this is the minority! You will not typically be able to spot the majority of people who utilise this procedure. We work to give subtle, natural results, and we won’t tell if you don’t!",

    an2_2:
      "",

    an2_3:
      "",
// ---------------------------------------------------
    faq3: 
      "How Long Do Results Last?",

    an3:
     "Results last for between three and six months. This is dependent on your skin type and the extent of the fine lines and wrinkles that you already have.",

    an3_2:
      "There are also a few ways to help your results last longer:",

    an3_3:
     "Stop Smoking - We know it’s a big ask, but it will do your skin so much good. If you can’t, or don’t want to, quit completely, cutting down will also help.",

     an3_4:
      "Hydrate - Keeping well hydrated is a great way to get your skin looking its best.",

      an3_5:
      "Healthy Diet - We’d specifically advise eating fatty fish, nuts and seeds.",


      an3_6:
      "Cleanse And Moisturise - Cleanse gently, don’t pick any product too harsh for your skin, and be sure to moisturise!",

// -------------------------------------------------
faq4: 
    "",

    an4: 
    "",

    an4_2:
      "",

    an4_3: 
    "",
// ----------------------------------------------
    
    faq5: 
    "",

    an5: 
    "",

    an5_2:
      "",

    an5_3:
     "",

// ------------------------------------------------
    faq6:
    "",

    an6:
     "",

    an6_2:
      "",

    an6_3: 
    "",
  };

  return (
      
    <div className={styles.page_container}>
    <Head>
        <title>Facial Anti-Wrinkle Treatments - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
     

      <NavBar />

      <PageHeader 
      title="Facial Anti-Wrinkle Treatments" 
      src="/antiWrinkle.png" />

      <PageMain questions={faq} title='Facial Anti-Wrinkle Treatments' />
      <Footer/>
    </div>
  );
}
