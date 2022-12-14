import React from 'react'
import styles from '../../styles/servicesPage.module.css'
import BookingForm from '../contact/bookingForm'
import ContactForm from '../contact/bookingForm'
import Faqs from '../faqs/faqs'


export default function PageMain({questions, title}) {


  return (
    <div className={styles.main_section}>
    <div className={styles.desc_faq_con}>
        <div>
            <h1 className={styles.desc_title}>Description</h1>
            <p className={styles.desc}>{questions.desc1}</p>
            <p className={styles.desc}>{questions.desc2}</p>
            <p className={styles.desc}>{questions.desc3}</p>
            <p className={styles.desc}>{questions.desc4}</p>
            <p className={styles.desc}>{questions.desc5}</p>
            <p className={styles.desc}>{questions.desc6}</p>

        </div>
        <div>
            <Faqs 
             questions={questions}
            />
        </div>
    </div>
    <div className={styles.book_con}>
        <BookingForm title={title}/>
    </div>
    </div>
  )
}
