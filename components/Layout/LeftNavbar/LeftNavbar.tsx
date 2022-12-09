import Link from 'next/link';
import { Calendar, FileText, HashStraight, HouseSimple, ImageSquare, MapPin, Megaphone } from 'phosphor-react';
import Logo from '../../Logo';
import MenuHeading from '../../MenuHeading/MenuHeading';
import NavItem from '../../NavItem/NavItem';
import styles from './LeftNavbar.module.scss';

const LeftNavbar = () => {
  return (
    <aside className={styles.leftSection}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <MenuHeading text='MENU' />
              </li>
              <NavItem text='Home' link='#' icon={<HouseSimple size={22} color={"#fff"} />} />
              <NavItem text='News' link='#' icon={<Megaphone size={22} />} />
              <NavItem text='Discovery' link='#' icon={<MapPin size={22} />} />
              <NavItem text='Galery' link='#' icon={<ImageSquare size={22} />} />
              <NavItem text='Events' link='#' icon={<Calendar size={22} />} />
              <li>
                <MenuHeading text='YOUR FAVOURITE' />
              </li>
              <NavItem text="games" link="#" icon={<HashStraight size={22} />} />
              <NavItem text="javascript" link="#" icon={<HashStraight size={22} />} />
              <NavItem text="react" link="#" icon={<HashStraight size={22} />} />
              <NavItem text="frontend" link="#" icon={<HashStraight size={22} />} />
            </ul>
          </nav>
          <footer>
            <span>Copyright 2022</span>
            <Link href={"#"}>Help?</Link>
          </footer>
        </aside>
  )
}

export default LeftNavbar