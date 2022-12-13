import LeftNavbar from "./LeftNavbar/LeftNavbar";
import RightSidebar from "./RightSidebar/RightSidebar";
import styles from './Layout.module.scss';

interface ILayoutProps{
  children: React.ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <div className={styles.body}>
      <aside className={styles.left}>
        <LeftNavbar />
      </aside>
        {children}
      <aside className={styles.right}>
        <RightSidebar />
      </aside>
    </div>
  )
}

export default Layout;