import Link from 'next/link';
import { Calendar, FileText, HouseSimple, ImageSquare, MapPin, Megaphone } from 'phosphor-react';
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
              <NavItem text='Latest News' link='#' icon={<Megaphone size={22} />} />
              <NavItem text='Explore' link='#' icon={<MapPin size={22} />} />
              <NavItem text='Files' link='#' icon={<FileText size={22} />} />
              <NavItem text='Galery' link='#' icon={<ImageSquare size={22} />} />
              <NavItem text='Events' link='#' icon={<Calendar size={22} />} />
              <li>
                <MenuHeading text='YOUR FAVOURITE' />
              </li>
              <NavItem text="Foresto" link="#" icon={"🌳"} />
              <NavItem text="Birds" link="#" icon={"🐦"}/>
              <NavItem text="Nature" link="#" icon={"🌴"} />
              <NavItem text="Animals" link="#" icon={"🐢"} />
              <NavItem text="Motobike" link="#" icon={"🚴‍♂️"} />
              <NavItem text="Mojave" link="#" icon={"🌱"} />
              <NavItem text="Chemistry" link="#" icon={"🧪"} />
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