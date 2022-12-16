import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/footer.js";
import ServicesCarousel from "../components/homeServicesCarousel/servicesCarousel.js";
import Intro from "../components/intro/intro.js";
import NavBar from "../components/navBar/NavBar";
import Practitioners from "../components/practitioners/practitioners.js";
import Reviews from "../components/reviews/reviews.js";
import WelcomeBanner from "../components/welcomeBanner/welcomeBanner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RI Aesthetics</title>
        <meta
          name="description"
          content="Aesthetics in the heart of Royal Leamington Spa."
        />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <WelcomeBanner />
        <Intro />
        <ServicesCarousel/>
        <Practitioners/>
        <Reviews/>
        <Footer/>
      </main>
    </div>
  );
}
