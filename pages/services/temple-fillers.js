import React from "react";
import NavBar from "../../components/navBar/NavBar";
import PageHeader from "../../components/pageHeader/pageHeader";
import PageMain from "../../components/pageMain/pageMain";
import styles from "../../styles/servicesPage.module.css";
import Head from "next/head";

export default function TempleFillers() {
  const faq = {
    desc1:
      "As we age, our natural production of collagen, elastin and hyaluronic acid decreases. Whilst not problematic for our health, this can take a toll on our appearance.",

    desc2:
      "The decline in these substances can lead to ‘hollows’ around our temples. These age us and can make the face appear unbalanced.",

    desc3:
      "Exercising regularly and eating well is good for your overall health as well as, generally speaking, your appearance. However, these things can actually exacerbate the hollowing of your temple region… which is entirely unfair!",

    desc4:
      "If you are finding this area problematic, you can book in for a consultation with our friendly, qualified and experienced clinicians today! We will have you feeling confident and looking your best in no time at all!",

   

   

   

    

    faq5: 
    "",


    faq6:
     "",
// ------------------------------------------------
     faq1: 
     "How Long Does It Take?",

    an1:
     "As responsible practitioners, we do not offer any hurried treatments. We take the time to get to know you and your requirements first. This allows us to provide a truly bespoke procedure, tailored perfectly to you.",

    an1_2:
      "Following a full consultation, this procedure takes mere minutes - you can even pop in on your lunch break!",

    an1_3: 
    "",
// ----------------------------------------------
    faq2: 
    "How Long Do They Last?",

    an2:
     "All skin is different, which is why we ensure that we have a thorough consultation with each patient. This makes it difficult to put an exact timeframe on how long your results will last.",

    an2_2:
      "Dermal Fillers are used to enhance specific areas, such as the cheeks or lips, whereas Profhilo® is dispersed evenly throughout the face, giving a plumper and firmer look all round. Here at KB Face Contour Aesthetics, we also offer Dermal Fillers, which are ideal if you have specific problem areas such as your lips, jaw, cheeks or chin.",

    an2_3:
      "If you are searching for a youthful look with fuller, more beautiful skin, Profhilo® is the perfect treatment for you",
// ---------------------------------------------------
    faq3: 
      "What Is The Recovery Time?",

    an3:
     "A single course of Profhilo® involves two injectable treatments spaced one month apart. You can expect to enjoy the effects of intense hydration, with your skin looking healthier and plumper. You will also notice the reduction, or complete disappearance, of fine lines and wrinkles.",

    an3_2:
      "The improvement in skin texture will be undeniable! You will be glowing - not only due to the physical effects of the treatment, but also because of the confidence that the results will bring about.",

    an3_3:
     "",
// -------------------------------------------------
faq4: 
    "Does It Hurt?",

    an4: 
    "Temple Fillers can be mildly painful, as with any injection, but will not cause a great amount of discomfort",

    an4_2:
      "You may continue to experience some slight tenderness following the procedure, although this will subside within 48 hours.",

    an4_3: 
    "",
// ----------------------------------------------
    an5: 
    "",

    an5_2:
      "",

    an5_3:
     "",

// ------------------------------------------------

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
        <title>Temple Fillers - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavBar />

      <PageHeader title="Temple Fillers" src="/templeFillers.png" />

      <PageMain questions={faq} title='Temple Fillers' />
    </div>
  );
}
