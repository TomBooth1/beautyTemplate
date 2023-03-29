import styles from "../../styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer_con}>
      <div className={styles.footer_content}>
        <div className={styles.left_con}>
          <Link href="/">
            <img className={styles.logo} src="/logo1.png" alt="RI Aesthetics" />
          </Link>
          <p>© 2022 RI Aesthetics. Website By</p>{" "}
          <Link target="_blank" href="https://firefromthebooth.netlify.app/">
            <p className={styles.link}>Tom</p>
          </Link>
        </div>

        <div className={styles.right_con}>

          <a className={styles.link} href={`tel:07123456789`}>
            {" "}
            +447123 456 789
          </a>
          <Link href="/privacy-policy">
            <p className={styles.link}>Privacy Policy</p>
          </Link>

          <div className={styles.socials_con}>
         

          <Link target="_blank" href="https://www.instagram.com/firefromthebooth">
            <img className={styles.social_icon} src="/insta-f1f1f1.png" alt="RI Aesthetics"  />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
