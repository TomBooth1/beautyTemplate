import { useState } from 'react'
import styles from '../../styles/contactForm.module.css'



export default function ContactForm() {

  

//   Form validation state
const [errors, setErrors] = useState({});



// Setting success or failure messages states
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [showFailureMessage, setShowFailureMessage] = useState(false);



async function handleSubmit(e){

  e.preventDefault();

  const formData = {}
  Array.from(e.currentTarget.elements).forEach(field => {
    
    if ( !field.name ){ return } 

    formData[field.name] = field.value;
  });

  const res = await fetch('/api/mail', {
    method: 'post',
    body: JSON.stringify((formData))
  })

  const { error } = await res.json();
  if (error) {
    setShowFailureMessage(true)
    console.log(error);
    return;
  }
  document.getElementById("Form").reset();
  setShowSuccessMessage(true)
  // console.log(res.status);

};

  return (
    <section className={styles.contact_form_con}> 

    
      <form id='Form' className={styles.contact_form} method="post" onSubmit={handleSubmit} >
      {showFailureMessage ? <p className={styles.failuer_message}>Im afraid that didn't Work <br/> Please try again or call us on 07123 456 789</p> : null}
        {showSuccessMessage ? <p className={styles.success_message}>Thank you for your message, we will get back to you as soon as possible.</p> : null}
      <div className={styles.p_con}>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="name">Full Name*</label>
        <input className={styles.input} type="text" name="name" required />
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="email">Email Address*</label>
        <input className={styles.input} type="email" name="email" required/>
      </p>
      </div>
      <div className={styles.p_con}>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="phone">Phone Number</label>
        <input className={styles.input} type="tel" name="phone"  />
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="email">Subject*</label>
        <input className={styles.input} type="text" name="subject" required/>
      </p>
      </div>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="message">Message*</label>
        <textarea className={styles.input_area} name="message" required />
        </p>
        <p className={styles.input_p_button}>
        <button className={styles.button}>Send Message</button>
      </p>
       
      </form>
    
    </section>
  )
}
