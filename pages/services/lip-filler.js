import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";


export default function LipFiller() {
  const faq = {
    desc1:
      "Despite having been around for many years, Lip Fillers have recently enjoyed quite a surge in popularity. That perfect pout is something that we all want, and Kylie Jenner’s beautiful work has helped to bring this safe, quick and effective treatment to mainstream attention.",

    desc2:
      "Yet, for some of our clients it’s not just about plumping, this procedure is also the ideal way to correct asymmetry.",

    desc3:
      "The filler that we use contains hyaluronic acid (HA) – a substance that is naturally produced by the body. Many of us have had thinner lips throughout our whole lives, whilst others find their lips becoming thinner over time. This is because our supplies of HA decrease as we age. All of the above makes hyaluronic acid fillers fantastic options for plump, natural-looking lips.",

    desc4:
      "This treatment is semi-permanent, and the length of time that results are maintained varies from person to person. You can expect your enhanced lips to last for at least six months, but this can extend as far as a year. You can always pop back in for a top-up when you’re ready!",


    
// ------------------------------------------------
     faq1: 
     "Can Lip Fillers Be Removed?",

    an1:
     "Yes. Lip Fillers can be easily removed almost instantly, with no lasting damage.",

    an1_2:
      "We take a great deal of time to understand your wants, needs and expectations before we even think about starting the procedure! Working together like this means that you will know exactly what to expect, and we can tailor your treatment to suit you perfectly. So no need to worry about removal!",

    an1_3: 
    "",
// ----------------------------------------------
    faq2: 
    "Can Lip Fillers Look Natural?",

    an2:
     "Of course! Provided that you get them done by experienced professionals, like us",

    an2_2:
      "Unfortunately, there are disreputable practitioners out there who encourage (or allow) people to go too big, or don’t get to know their clients’ wants and needs beforehand. This is very poor practice.",

    an2_3:
      "We are here to enhance your natural beauty, so are led by the shape of your lips and your individual style - not whatever look is popular that week.",
// ---------------------------------------------------
    faq3: 
      "What Happens After Lip Filler Treatment?",

    an3:
     "So, our Lip Fillers will have you looking and feeling gorgeous, but it’s not 100% satisfaction straight away!",

    an3_2:
      "You are likely to experience some swelling and/or bruising, but don’t worry, this should go down within 48 hours. Using an ice pack can help alleviate this, just don’t keep it on constantly. Other than that, you won’t need any downtime, you can leave us and carry on with your day as usual.",

    an3_3:
     "",
// -------------------------------------------------
faq4: 
    "What Is In Lip Fillers?",

    an4: 
    "Juvederm is made from biodegradable materials, is biocompatible and contains hyaluronic acid (the naturally occurring substance we talked about above). Introducing a little extra HA offers amazing, natural-looking results!",

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
        <title>Lip Fillers - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavBar />

      <PageHeader 
      title="Lip Fillers" 
      src="/lipFiller.png" />

      <PageMain questions={faq} />
    </div>
  );
}
