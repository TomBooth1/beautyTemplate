import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";


export default function B12Injections() {
  const faq = {
    desc1:
      "Do you frequently find yourself lethargic, even after a good night’s sleep? Do you often feel as though you do not have the energy to do anything strenuous, or as though you need a nap? If so, B12 injections may be able to help!",

    desc2:
      "B12 is a vitamin that is needed to create red blood cells. These cells carry oxygen all around your body. Without properly performing red blood cells, your muscles and organs will not be getting enough oxygen. This means that you will not be functioning properly.",

    desc3:
      "There are a number of reasons why an individual may be deficient in vitamin B12. These include specific dietary restrictions, certain medications, gastrointestinal disorders and even just being over the age of 50.",

    desc4:
      "A B12 injection is the perfect way to correct this deficiency. They are quick, easy and effective!",


    
// ------------------------------------------------
     faq1: 
     "What Are The Benefits Of B12 Injections?",

    an1:
     "There are numerous benefits to having B12 injections. Your energy levels will increase, which many individuals find helpful in allowing them to exercise effectively. This change will benefit every aspect of your day-to-day life.",

    an1_2:
      "B12 also helps to keep the immune system working at its best, and can help to regulate sleeping patterns.",

    an1_3: 
    "It’s not just the body that gets a boost - this treatment can also improve your memory and concentration!",
// ----------------------------------------------
    faq2: 
    "How Do You Feel After A B12 Injection?",

    an2:
     "There are minor downsides to getting B12 injections. The injection is delivered directly into the muscle, which means you may experience some pain, swelling or itching at the injection site.",

    an2_2:
      "However, these mild side effects are only very short term and incomparable to the uplift in mood and healthy delivered.",

    an2_3:
      "",
// ---------------------------------------------------
    faq3: 
      "How Soon Do B12 Injections Start Working?",

    an3:
     "As with most treatments, the speed at which results are felt differ from person to person. It may take up to a few weeks to feel the alleviation of extreme tiredness and lack of energy. However, remember that the first 48-72 hours will see your red blood cell count increasing rapidly.",

    an3_2:
      "",

    an3_3:
     "",

     an3_4:
      "",

      an3_5:
      "",


      an3_6:
      "",

// -------------------------------------------------
faq4: 
    "Safety And Side Effects",

    an4: 
    "B12 injections are well-known for being very safe. Whilst there may be some mild pain, swelling or itching, these side effects are all short term. There are no major side effects.",

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
        <title>B12 Injections - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
     

      <NavBar />

      <PageHeader 
      title="B12 Injections" 
      src="/b12.png" />

      <PageMain questions={faq} />
    </div>
  );
}
