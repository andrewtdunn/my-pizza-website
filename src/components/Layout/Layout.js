import React from 'react'
import Head from 'next/head'
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greasy Andy's</title>
        <link href="./favicon.ico"/>
      </Head>

      <main className={styles.main}>
        { children }
      </main>

      <footer className={styles.footer}>Made by Cocoa.</footer>
    </div>
  )
}

export default Layout
