import styles from './NavItem.module.scss';

interface INavItemProps{
  text: string;
  link: string;
  icon?: React.ReactNode | undefined;
}

const NavItem = ({link,text,icon}: INavItemProps) => {
  return (
    <li className={styles.wrapper}>
      <a href={link}>
        <i>{icon && icon}</i>{text}
      </a>
    </li>
  )
}

export default NavItem;