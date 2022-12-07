import React from 'react'
import styles from '../../styles/practioners.module.css'
import PracCard from './pracCard'

export default function Practitioners() {
  return (
    <section className={styles.prac_con}>

        <PracCard 
        nme='Renee Ingram' 
        src='/rIngram.png' 
        desc='My name is Renee Ingram & I am the face behind company RI Aesthetics. My background is dentistry and Psychotherapy. I Made the transition to Aesthetics 5 years ago, and have been transforming lives ever since.' 
        alt='Renee Ingram'

        />

        <PracCard 
        nme='David Porter' 
        src='/dPorter.png' 
        desc='After qualifying in General Medicine David Porter trained and specialised in Emergency Care at the Royal London Hospital and led a team for 2 years. David entered into aesthetics by training with the prestigious Harley academy in 2016.' 
        alt='David Porter'

        />

    </section>
  )
}
