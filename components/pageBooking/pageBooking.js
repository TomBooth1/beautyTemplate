import styles from '../../styles/pageBooking.module.css'

import React from 'react'

export default function PageBooking() {
  return (
    <section className={styles.booking_con}>
        <form action="/send-data-here" method="post">

            <input type="text" id="first" name="first" placeholder='First Name'/>
            <input type="text" id="last" name="last"  placeholder='Last Name'/>
            <input type="text" id="first" name="first" placeholder='Phone'/>
            <input type="text" id="last" name="last"  placeholder='Email'/>
            <input type="date" id="last" name="last"  placeholder='Date'/>
            <input type="time" id="last" name="last"  placeholder='Time'/>
            <button type="submit">Submit</button>
</form>


    </section>
  )
}
