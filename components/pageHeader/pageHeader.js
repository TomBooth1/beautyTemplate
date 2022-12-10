import React from 'react'
import styles from '../../styles/servicesHeader.module.css'

export default function PageHeader(props) {
  return (
    <div className={styles.img_con}>
    <h1 className={styles.title}>{props.title}</h1>
    <img className={styles.main_img} src={props.src} alt={props.alt}/>
    </div>
  )
}
