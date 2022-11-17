import styles from './NavItem.module.scss';

interface INavItemProps{
  text: string;
  link: string;
  icon?: string;
}

export default function NavItem({link,text,icon = ''}: INavItemProps) {
  return (
    <a href={link} className={styles.wrapper}>
      <li>{text}</li>
    </a>
  )
}
