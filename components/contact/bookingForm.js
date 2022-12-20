import { useState } from 'react'
import styles from '../../styles/bookingForm.module.css'



export default function BookingForm({title}) {

  

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
    <section className={styles.booking_form_con}> 
    <h1 className={styles.booking_header}>Book Now!</h1>

    <div>
      <form id='Form' className={styles.booking_form} method="post" onSubmit={handleSubmit} >
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="name">Full Name*</label>
        <input className={styles.input} type="text" name="name" required />
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="email">Email Address*</label>
        <input className={styles.input} type="email" name="email" required/>
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="phone">Phone Number*</label>
        <input className={styles.input} type="tel" name="phone" required />
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="subject">Procedure</label>
        <input className={styles.input} type="text" name="subject" defaultValue={title} required/>
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="date">Date*</label>
        <input className={styles.input} type="date" name="date" required/>
      </p>
      <p className={styles.input_p}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea className={styles.input_area} name="message" />
        </p>
        {showFailureMessage ? <p className={styles.failuer_message}>Im afraid that didn`&apos;`t Work <br/> Please try again or call us on 07123 456 789</p> : <p></p>}

      {showSuccessMessage ? <p className={styles.success_message}>Thank You for your Booking! <br/> Keep an eye on your emails for confirmation.</p> : <p></p>}


      <p className={styles.input_p_button}>
        <button className={styles.button}>Book Now</button>
      </p>
      </form>
    </div>
    </section>
  )
}
