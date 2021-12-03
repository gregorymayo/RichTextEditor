import Head from 'next/head'
import App from './App'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rich Text Editor</title>
      </Head>
      <main className={styles.main}>
        <App />
      </main>
      <footer />
    </div>
  )
}

export default Home
