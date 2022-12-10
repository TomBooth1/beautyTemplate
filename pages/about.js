import React from "react";
import NavBar from "../components/navBar/NavBar";
import PageHeader from "../components/pageHeader/pageHeader";
import styles from "../styles/about.module.css";
import Head from "next/head";
import AboutIntro from "../components/about/aboutIntro";
import AboutClinics from "../components/about/aboutClinics";

export default function About() {
  return (
    <section>

      <Head>
        <title>About - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavBar />
      <PageHeader title="About" src="/welcome_4.png" />

      <AboutIntro/>
      <AboutClinics/>

    </section>
  );
}
