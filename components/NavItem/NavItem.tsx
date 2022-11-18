import styles from './NavItem.module.scss';

interface INavItemProps{
  text: string;
  link: string;
  icon?: React.ReactNode | undefined;
}

export default function NavItem({link,text,icon}: INavItemProps) {
  return (
    <a href={link} className={styles.wrapper}>
      <li><i>{icon && icon}</i>{text}</li>
    </a>
  )
}
