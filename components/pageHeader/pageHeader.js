import React from 'react'
import styles from '../../styles/servicesHeader.module.css'
import Image from 'next/image'

export default function PageHeader(props) {
  return (
    <div className={styles.img_con}>
    <h1 className={styles.title}>{props.title}</h1>
    <Image className={styles.main_img} src={props.src} alt={props.alt}/>
    </div>
  )
}
