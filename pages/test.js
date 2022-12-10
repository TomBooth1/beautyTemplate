import React from 'react'
import PageBooking from '../components/pageBooking/pageBooking'
import Head from 'next/head'
import AboutIntro from '../components/about/aboutIntro'
import AboutClinics from '../components/about/aboutClinics'

export default function text() {
  
  return (

    <div>
    <Head>
        <title>Test - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
        <AboutClinics/>
    </div>
  )
}
