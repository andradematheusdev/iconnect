import Head from 'next/head'
import Link from 'next/link'
import FavouriteList from '../components/FavouriteList/FavouriteList'
import Logo from '../components/Logo'
import MenuHeading from '../components/MenuHeading/MenuHeading'
import NavList from '../components/NavList/NavList'
import SearchBar from '../components/SearchBar/SearchBar'
import Stories from '../components/Stories/Stories'
import UserMenu from '../components/UserMenu/UserMenu'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>iConnect</title>
        <meta name="description" content="Connecting people!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>        
        <aside className={styles['left-section']}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <MenuHeading text='MENU' />
              </li>
              <NavList />
              <li>
                <MenuHeading text='YOUR FAVOURITE' />
              </li>
              <FavouriteList />
            </ul>
          </nav>
          <footer>
            <span>Copyright 2022</span>
            <Link href={"#"}>Help?</Link>
          </footer>
        </aside>
        
        <main className={styles['middle-section']}>
          <SearchBar />
          <section>
        
          </section>
        </main>
        <aside className={styles['right-section']}>
          <UserMenu />
          <div className={styles.stories}>
            <MenuHeading text="STORIES" />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </div>
        </aside>
      </div>
    </div>
  )
}
