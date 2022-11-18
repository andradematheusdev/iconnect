import Head from 'next/head'
import { Calendar, FileText, HouseSimple, ImageSquare, MapPin, Megaphone } from 'phosphor-react'
import FavouriteList from '../components/FavouriteList/FavouriteList'
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
          <NavItem text='Home' link='#' icon={<HouseSimple size={22} color={"#fff"} />} />
          <NavItem text='Latest News' link='#' icon={<Megaphone size={22} />} />
          <NavItem text='Explore' link='#' icon={<MapPin size={22} />} />
          <NavItem text='Files' link='#' icon={<FileText size={22} />} />
          <NavItem text='Galery' link='#' icon={<ImageSquare size={22} />} />
          <NavItem text='Events' link='#' icon={<Calendar size={22} />} />
          <MenuHeading text='YOUR FAVOURITE' />
          <FavouriteList />
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
