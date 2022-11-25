import styles from './RightSidebar.module.scss';
import UserMenu from "../../UserMenu/UserMenu"
import MenuHeading from '../../MenuHeading/MenuHeading';
import Stories from '../../Stories/Stories';
import Contact from '../../Contact/Contact';
import SearchBar from '../../SearchBar/SearchBar';
import { Gear, Pencil, Plus } from 'phosphor-react';


const RightSidebar = () => {
  return (
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
  )
}

export default RightSidebar