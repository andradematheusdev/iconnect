import Head from 'next/head'
import Logo from '../components/Logo'
import MenuHeading from '../components/MenuHeading/MenuHeading'
import NavItem from '../components/NavItem/NavItem'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>iConnect</title>
        <meta name="description" content="Connecting people!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles['left-section']}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <MenuHeading text='MENU' />
          <NavItem text='Home' link='#' />
          <NavItem text='Latest News' link='#' />
          <NavItem text='Explore' link='#' />
          <NavItem text='Files' link='#' />
          <NavItem text='Galery' link='#' />
          <NavItem text='Events' link='#' />
        </nav>
      </aside>
      
      <main className={styles['middle-section']}>
        <div>
          
        </div>
      </main>

      <aside className={styles['right-section']}>
        
      </aside>

      <footer>
        
      </footer>
    </div>
  )
}
