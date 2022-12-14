import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navBar.module.css";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}


export default function NavBar() {
  const scrollPosition = useScrollPosition();

  return (
    
    <header
      className={
        scrollPosition <= 10
          ? styles.navBar_container
          : styles.navBar_container_scrolled
      }
    >
      <nav className={styles.navBar}>

        <Link href="/about">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            ABOUT
          </p>
        </Link>

        <Link href="/training">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            TRAINING
          </p>
        </Link>

        <Link href="/services">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            SERVICES
          </p>
        </Link>

        <Link href="/">
          <img
            className={
              scrollPosition <= 10 ? styles.logo : styles.logo_scrolled
            }
            src="/logo1.png"
            alt="RI Aesthetics"
          />
        </Link>

        <Link href="/clinics">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            CLINICS
          </p>
        </Link>

        <Link href="/pricelist">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            PRICELIST
          </p>
        </Link>

        <Link href="/contact">
          <p
            className={
              scrollPosition <= 10 ? styles.link : styles.link_scrolled
            }
          >
            CONTACT
          </p>
        </Link>
        
      </nav>
    </header>
  );
  
}