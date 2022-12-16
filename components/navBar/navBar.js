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


// const hamburger = document.querySelector(".hamburger")

// const navMenu = document.querySelector(".nav_menu")

export default function NavBar() {
  const scrollPosition = useScrollPosition();
  const [isActive, setIsActive] = useState(false)
  // hamburger.addEventListener( "click", () => {
  //   hamburger.classList.toggle("active")
  //   navMenu.classList.toggle("active")
  // })

  function hamburgerClick(){
    setIsActive(current => !current)
    console.log("CLICKED")
    console.log(isActive)
  }

  return (
    
    <header
      className={
        scrollPosition <= 10
          ? styles.navBar_container
          : styles.navBar_container_scrolled
      }
    >
      <nav className={styles.navBar}>
<div className={isActive == true ? styles.nav_menu_active : styles.nav_menu}>

<Link href="/"> 
          
        </Link>
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
</div>
        <Link href="/">
          <img
            className={
              scrollPosition <= 10 ? styles.logo : styles.logo_scrolled
            }
            src="/logo1.png"
            alt="RI Aesthetics"
          />
        </Link>
        
<div className={isActive == true ? styles.nav_menu_active : styles.nav_menu}>
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
</div>

        <div className={ isActive ? styles.hamburger_active : styles.hamburger} onClick={hamburgerClick}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      
      </nav>
    </header>
  );
  
}