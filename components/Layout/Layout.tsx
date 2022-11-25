import LeftNavbar from "./LeftNavbar/LeftNavbar";
import RightSidebar from "./RightSidebar/RightSidebar";
import styles from './Layout.module.scss';

interface ILayoutProps{
  children: React.ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
  return (
    <div className={styles.body}>
      <LeftNavbar />
        {children}
      <RightSidebar />
    </div>
  )
}

export default Layout;