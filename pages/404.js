import Link from "next/link";
import NavBar from "../components/navBar/navBar";
import Head from "next/head";
import styles from "../styles/404.module.css";
import PageHeader from "../components/pageHeader/pageHeader";
import Footer from "../components/footer/footer";

export default function FourOhFour() {
  return (
    <section className={styles.page_container}>
      <Head>
        <title>About - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <PageHeader title="404 - Page not found." src="/templeFillers.png" />
      <div className={styles.body_}>
        <p className={styles.title}>
          It seems the page you are looking for doesn't exist.
        </p>
          <Link className={styles.home} href="/">Go back home</Link>
      </div>
      <Footer />
    </section>
  );
}
