import React from "react";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/footer/footer";
import NavBar from "../components/navBar/NavBar";
import PageHeader from "../components/pageHeader/pageHeader";
import styles from "../styles/contactPage.module.css";
export default function Contact() {
  return (
    <section className={styles.contact_page}>
      <NavBar />
      <PageHeader title="Contact" src="/welcome_4.png" />
      <div className={styles.contact_main}>
        <ContactForm />
      </div>
      <Footer />
    </section>
  );
}
