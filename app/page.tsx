import React from 'react'
import styles from './page.module.css'
import Header from './Header/page'
import FirstGreeting from './components/Boxes/FirstGreeting/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <FirstGreeting />
    </main>
  )
}
