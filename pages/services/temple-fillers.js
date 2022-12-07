import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import PageHeader from '../../components/pageHeader/pageHeader'
import PageMain from '../../components/pageMain/pageMain'
import styles from '../../styles/servicesPage.module.css'

export default function TempleFillers() {
  return (
    <div className={styles.page_container}>
<NavBar/> 
<PageHeader title='Temple Fillers' src='/templeFillers.png'/>
<PageMain 

desc='As we age, our natural production of collagen, elastin and hyaluronic acid decreases. Whilst not problematic for our health, this can take a toll on our appearance.

The decline in these substances can lead to ‘hollows’ around our temples. These age us and can make the face appear unbalanced.

Exercising regularly and eating well is good for your overall health as well as, generally speaking, your appearance. However, these things can actually exacerbate the hollowing of your temple region… which is entirely unfair!

If you are finding this area problematic, you can book in for a consultation with our friendly, qualified and experienced clinicians today! We will have you feeling confident and looking your best in no time at all!'
faq1='How Long Does It Take?'
faq2=''
faq3=''
faq4=''
an1=''
an2=''
an3=''
an4=''
/>
    </div>
 )
}
