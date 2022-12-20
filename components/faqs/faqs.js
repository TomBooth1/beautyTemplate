import React from 'react'
import styles from '../../styles/faqs.module.css'
import { useState } from 'react';

export default function Faqs({questions}) {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);


   const handleClick1 = () => {
    setIsActive1(current => !current);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
   }
   const handleClick2 = () => {
     setIsActive1(false)
    setIsActive2(current => !current);
    setIsActive3(false)
    setIsActive4(false)
    setIsActive5(false);
    setIsActive6(false);
   }
   const handleClick3 = () => {
     setIsActive1(false)
     setIsActive2(false)
    setIsActive3(current => !current);
    setIsActive4(false)
    setIsActive5(false);
    setIsActive6(false);
   }
   const handleClick4 = () => {
    setIsActive1(false)
    setIsActive2(false)
    setIsActive3(false)
    setIsActive4(current => !current);
    setIsActive5(false);
    setIsActive6(false);
   }

   const handleClick5 = () => {
    setIsActive1(false)
    setIsActive2(false)
    setIsActive3(false)
    setIsActive4(false);
    setIsActive5(current => !current);
    setIsActive6(false);
   }

   const handleClick6 = () => {
    setIsActive1(false)
    setIsActive2(false)
    setIsActive3(false)
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(current => !current);
   }
    
  return (
    <section className={styles.faq_con}>
    <h1 className={styles.faq_title}>FAQ`&apos;`s</h1>

{questions.faq1.length > 0 ? <div className={isActive1 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive1 ? styles.btn : styles.btn_active} onClick={handleClick1}>{questions.faq1}</button>
<div className={isActive1 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an1}</p>
<p className={ styles.answer }>{questions.an1_2}</p>
<p className={ styles.answer }>{questions.an1_3}</p>
</div>
</div> : <div/>}

{questions.faq2.length > 0 ? <div className={isActive2 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive2 ? styles.btn : styles.btn_active} onClick={handleClick2}>{questions.faq2}</button>
<div className={isActive2 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an2}</p>
<p className={ styles.answer }>{questions.an2_2}</p>
<p className={ styles.answer }>{questions.an2_3}</p>
</div>
</div> : <div/> }


{questions.faq3.length > 0 ? <div className={isActive3 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive3 ? styles.btn : styles.btn_active} onClick={handleClick3}>{questions.faq3}</button>
<div className={isActive3 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an3}</p>
<p className={ styles.answer }>{questions.an3_2}</p>
<p className={ styles.answer }>{questions.an3_3}</p>
<p className={ styles.answer }>{questions.an3_4}</p>
<p className={ styles.answer }>{questions.an3_5}</p>
<p className={ styles.answer }>{questions.an3_6}</p>

</div>
</div> : <div/> }

{questions.faq4.length > 0 ? <div className={isActive4 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive4 ? styles.btn : styles.btn_active} onClick={handleClick4}>{questions.faq4}</button>
<div className={isActive4 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an4}</p>
<p className={ styles.answer }>{questions.an4_2}</p>
<p className={ styles.answer }>{questions.an4_3}</p>
</div>
</div> : <div/> }

{questions.faq5.length > 0 ? <div className={isActive5 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive5 ? styles.btn : styles.btn_active} onClick={handleClick5}>{questions.faq5}</button>
<div className={isActive5 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an5}</p>
<p className={ styles.answer }>{questions.an5_2}</p>
<p className={ styles.answer }>{questions.an5_3}</p>
</div>
</div> : <div/> }

{questions.faq6.length > 0 ? <div className={isActive6 ? styles.btn_con_expand : styles.btn_con}>

<button className={!isActive6 ? styles.btn : styles.btn_active} onClick={handleClick6}>{questions.faq6}</button>
<div className={isActive6 ? styles.answer_con_expand : styles.answer_con }>
<p className={ styles.answer }>{questions.an6}</p>
<p className={ styles.answer }>{questions.an6_2}</p>
<p className={ styles.answer }>{questions.an6_3}</p>
</div>
</div> : <div/> }

    </section>
  )
}
