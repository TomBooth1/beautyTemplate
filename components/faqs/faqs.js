import React from 'react'
import styles from '../../styles/faqs.module.css'
import Link from 'next/link'

export default function Faqs(props) {
    function handleClick(){
console.log('clicked')
    }
    
  return (
    <div className={styles.faq_con}>
    <h1>FAQ's</h1>
    <button onClick={handleClick}>{props.faq1}</button>
    </div>
  )
}
