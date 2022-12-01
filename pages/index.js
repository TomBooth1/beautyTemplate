import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navBar/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KB Facecontour Aesthetics</title>
        <meta name="description" content="Aesthetics in the heart of Royal Leamington Spa." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
   <NavBar/>
   
      </main>

    </div>
  )
}
