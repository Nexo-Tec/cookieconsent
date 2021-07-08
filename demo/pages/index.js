import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cookie Consent Demo</title>
        <meta name="description" content="Demo page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🍪‏‏‎  Cookie Consent
        </h1>

        <p className={styles.description}>
          Demo page
        </p>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nexojornal.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Developed in 🇧🇷‏‏‎ ‎‏‏‎ ‎Brazil</em>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎{' '}By {' '}
          <span className={styles.logo}>
            <Image src="https://camo.githubusercontent.com/fa6ae587fa1be4d2365d87c07c202f2822a37b0eabb71e95de6786bb8f93d719/68747470733a2f2f7777772e6e65786f6a6f726e616c2e636f6d2e62722f6173736574732f36366434656437336532633736306530366463323333643766646266343334382e706e67" alt="Nexo Tec" width={16} height={16} /> ‎‏‏‎ ‎‏‏‎ ‎Nexo
          </span>
        </a>
      </footer>
    </div>
  )
}
