import React from 'react'
import styles from '../../styles/pracCard.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function PracCard(props) {
  return (
    <div className={styles.card_con}>
    <div className={styles.img_con}>
        <Image className={styles.image} src={props.src} alt={props.alt} />
        </div>
        <h1 className={styles.nme}>{props.nme}</h1>
        <p className={styles.desc}>{props.desc}</p>
        <Link className={styles.contact} href='/contact'>
            Contact Me
        </Link>

    </div>
  )
}
