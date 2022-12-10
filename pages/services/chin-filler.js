import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";


export default function ChinFiller() {
  const faq = {
    desc1:
      "Chin Fillers are used to improve the definition of the chin and make this area appear more proportionate to the rest of the face. They simultaneously improve the appearance of jowls, and reduce fine lines and wrinkles.",

    desc2:
      "We can use Chin Fillers to define a weak chin, improve facial symmetry and create a more angular, sculpted jaw – all in one easy, minimally invasive treatment!",

    desc3:
      "This procedure requires no downtime, meaning that you can carry on with your day-to-day life as usual immediately after treatment. However, there may be some mild bruising and/or swelling.",

    desc4:
      "Book in for a consultation with us today to achieve your perfect profile!",


    
// ------------------------------------------------
     faq1: 
     "How Do Chin Fillers Work??",

    an1:
     "The injection of dermal filler plumps the skin, allowing us to reshape the chin without the need for surgery. This means that you can obtain your ideal facial structure whilst foregoing the risks associated with going under general anesthetic, and without the downtime that comes alongside such surgeries.",

    an1_2:
      "",

    an1_3: 
    "",
// ----------------------------------------------
    faq2: 
    "How Long Do They Last?",

    an2:
     "All skin is different, therefore, the length of time that fillers last from person to person can vary. However, Chin Fillers typically last between 12 and 18 months.",

    an2_2:
      "",

    an2_3:
      "",
// ---------------------------------------------------
    faq3: 
      "Will They Look And Feel Natural?",

    an3:
     "We work to enhance your natural features, not disguise them. So, yes, they will look and feel natural!",

    an3_2:
      "Whilst friends and family will notice that you are looking your best, they won’t be able to tell that you have had this procedure done. (Just a warning that they may start asking you for your workout plan!)",

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
        <title>Chin Filler - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
 
      <NavBar />

      <PageHeader 
      title="Chin Filler" 
      src="/chinFiller.png" />

      <PageMain questions={faq} />
    </div>
  );
}
