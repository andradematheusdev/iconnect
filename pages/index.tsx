import Head from 'next/head';
import Link from 'next/link';
import { Gear, Pencil, Plus } from 'phosphor-react';
import Contact from '../components/Contact/Contact';
import EventBlock from '../components/EventBlock/EventBlock';
import FavouriteList from '../components/FavouriteList/FavouriteList';
import IntroductionBlock from '../components/IntroductionBlock/IntroductionBlock';
import Logo from '../components/Logo';
import MenuHeading from '../components/MenuHeading/MenuHeading';
import NavList from '../components/NavList/NavList';
import ProfileMain from '../components/ProfileMain/ProfileMain';
import SearchBar from '../components/SearchBar/SearchBar';
import Stories from '../components/Stories/Stories';
import UserMenu from '../components/UserMenu/UserMenu';
import YourPagesBlock from '../components/YourPagesBlock/YourPagesBlock';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>iConnect</title>
        <meta name="description" content="Connecting people!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>        
        <aside className={styles.leftSection}>
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
        
        <main className={styles.middleSection}>
          <div className={styles.search}>
            <SearchBar />
          </div>
          <section>
            <ProfileMain />
            <div className={styles.mainGrid}>
              <div className={styles.block1}>
                <IntroductionBlock />
              </div>
              <div className={styles.block2}>
                <EventBlock />
              </div>
              <div className={styles.block3}>
                <YourPagesBlock />
              </div>
              <div className={styles.block4}>
                <IntroductionBlock />
              </div>
            </div>
          </section>
        </main>

        <aside className={styles.rightSection}>
          <UserMenu />
          <ul className={styles.contacts}>
            <MenuHeading text="STORIES" />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </ul>
          <ul className={styles.contacts}>
            <MenuHeading text="CONTACTS" />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </ul>
          <footer>
            <SearchBar />
            <Gear size={22} />
            <Pencil size={22} />
            <Plus size={22} />
          </footer>
        </aside>
      </div>
    </div>
  )
}
