import React from "react";
import styles from "../../styles/servicesHeader.module.css";
import Image from "next/image";

export default function PageHeader(props) {
  return (
    <div className={styles.img_con}>
      <h1 className={styles.title}>{props.title}</h1>
      <img className={styles.main_img} 
      src={props.src} 
      width={1400}
      height={1000}
      alt={props.alt} />
    </div>
  );
}
