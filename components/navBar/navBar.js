import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/navBar.module.css";


export default function NavBar() {
  return (
    <section className={styles.navBar_container}>
      <nav className={styles.navBar}>
        <Link href="/">
         
        About
          
        </Link>
        <div className={styles.links}>
          <Link href="/#shop">
           Training
          </Link>
          <Link href="/contact">
            Services
          </Link>
          <Link href="/basket">
            <img src='/logo.png' alt='logo'/>
          </Link>
        </div>
      </nav>

     
    </section>
  );
}
