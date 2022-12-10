import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

import { useState, useEffect } from "react";


export default function CheekFillers() {
  const faq = {
    desc1:
      "The cheeks aren’t typically seen as a youthful part of your appearance, unless yours have been affected by the natural process of ageing. Then it’s a very different story!",

    desc2:
      "As many people age, they find that, over time, their cheeks lose the volume they once had, and begin to look sunken and hollow. This seemingly small change can have a detrimental impact on a person’s self-esteem.",

    desc3:
      "As soon as we hit our mid-twenties, our body starts to produce 1% less collagen per year, meaning the skin slowly loses its elasticity before the cheeks begin to droop and wrinkles start to appear. Even the highest cheekbones and fullest faces will be affected by these changes too.",

    desc4:
      "However, there’s no need to mourn your former face just yet. Cheek Fillers can be used to restore lost volume and smooth the fine lines and wrinkles that develop on this part of the face. Through the use of hyaluronic acid, Cheek Fillers make the skin look plumper and more full of volume, hydrating them from within to provide long-lasting results.",


    
// ------------------------------------------------
     faq1: 
     "Can I Get Cheek Fillers?",

    an1:
     "Cheek Fillers are suitable for anyone who has either lost volume in their cheeks, or would like to enhance this area of the face. After all, it’s not just those who have been affected by the ageing process that want to accentuate their appearance.",

    an1_2:
      "",

    an1_3: 
    "",

// ----------------------------------------------
    faq2: 
    "Are There Any Side Effects?",

    an2:
     "The procedure itself might be a little uncomfortable, but certainly not painful. Any discomfort won’t last long and will soon subside. Following your treatment, you might experience some slight swelling and bruising; this will fade after a few days.",

    an2_2:
      "",

    an2_3:
      "",
// ---------------------------------------------------
    faq3: 
      "How Long Will My Results Last?",

    an3:
     "On average, the results of your Cheek Fillers can last for up to 12 months. There are several things that can affect this, but this ultimately depends on you as an individual. Hyaluronic acid is a naturally occurring substance and will therefore be gradually broken down by the body.",

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
        <title>Cheek Fillers - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
     

      <NavBar />

      <PageHeader 
      title="Cheek Fillers" 
      src="/cheekFiller.png" />

      <PageMain questions={faq} />
    </div>
  );
}
