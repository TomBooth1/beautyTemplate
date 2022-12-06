import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navBar.module.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [clientWindowHeight, setclientWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setclientWindowHeight(window.scrollY);
    };
    window.addEventListener(window.scrollY, handleScroll());
  }, [clientWindowHeight]);

  console.log(clientWindowHeight);

  return (
    <header
      className={
        clientWindowHeight === 0
          ? styles.navBar_container
          : styles.navBar_container_scrolled
      }
    >
      <nav className={styles.navBar}>

        <Link href="/about">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            ABOUT
          </p>
        </Link>

        <Link href="/training">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            TRAINING
          </p>
        </Link>

        <Link href="/services">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            SERVICES
          </p>
        </Link>

        <Link href="/">
          <img
            className={
              clientWindowHeight === 0 ? styles.logo : styles.logo_scrolled
            }
            src="/logo1.png"
            alt="RI Aesthetics"
          />
        </Link>

        <Link href="/clinics">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            CLINICS
          </p>
        </Link>

        <Link href="/pricelist">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            PRICELIST
          </p>
        </Link>

        <Link href="/contact">
          <p
            className={
              clientWindowHeight === 0 ? styles.link : styles.link_scrolled
            }
          >
            CONTACT
          </p>
        </Link>
        
      </nav>
    </header>
  );
}
