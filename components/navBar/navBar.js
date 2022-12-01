import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/navBar.module.css";

function NavBar() {
  return (
    <section className={styles.nav_container}>
    
      <Link className={styles.link_desktop} href="/">
          <a className={styles.link_desktop}>About</a>
        </Link>
    
        <Link href="/">
          <img className={styles.nav_logo} src="/logo.png" alt="logo" />
        </Link>
      
    </section>
  );
}

export default NavBar()