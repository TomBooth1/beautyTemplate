import React from 'react'
import styles from '../../styles/carouselCard.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function CarouselCard(props) {

  return (
    <Link href={props.href} className={styles.card_container}>
    <Image className={styles.card_image} src={props.src} alt={props.alt}/>
    <div className={styles.gradient}> <h1 className={styles.card_title}>{props.title}</h1>
    <p className={styles.card_description}>{props.desc}</p> </div>

<div className={styles.card_content}>
    <h1 className={styles.card_title}>{props.title}</h1>
    <p className={styles.card_description}>{props.desc}</p>
</div>

    </Link>
  )
}
