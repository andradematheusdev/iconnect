import styles from './MenuHeading.module.scss';

interface IMenuHeadingProps{
  text: string;
  size?: number;
}

const MenuHeading = ({text, size = 12}: IMenuHeadingProps) => {
  return (
    <span className={styles.heading} style={{fontSize: size}}>{text}</span>
  )
}

export default MenuHeading;