import React from 'react'
import styles from '../../styles/servicesPage.module.css'
import Faqs from '../faqs/faqs'


export default function PageMain(props) {
  return (
    <div className={styles.main_section}>
    <div className={styles.desc_faq_con}>
        <div>
            <h1>Description</h1>
            <p>{props.desc}</p>
        </div>
        <div>
            <Faqs faq1={props.faq1} 
            faq2={props.faq2} 
            faq3={props.faq3} 
            faq4={props.faq4} 
            an1={props.an1}
            an2={props.an2}
            an3={props.an3}
            an4={props.an4}
            />
        </div>
    </div>
    <div className={styles.book_con}>

    </div>
    </div>
  )
}
