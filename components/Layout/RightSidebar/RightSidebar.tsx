import styles from './RightSidebar.module.scss';
import UserMenu from "../../UserMenu/UserMenu"
import MenuHeading from '../../MenuHeading/MenuHeading';
import Story from '../../Story/Story';
import Contact from '../../Contact/Contact';
import SearchBar from '../../SearchBar/SearchBar';
import { Gear, Pencil, Plus } from 'phosphor-react';


const RightSidebar = () => {
  return (
    <aside className={styles.rightSection}>
          <UserMenu />
          <MenuHeading text="STORIES" />
          <ul className={styles.stories}>
            <Story />
            <Story />
            <Story />
            <Story />
          </ul>
          <MenuHeading text="CONTACTS" />
          <ul className={styles.contacts}>
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