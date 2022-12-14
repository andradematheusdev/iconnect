import clsx from 'clsx';
import styles from './MenuHeading.module.scss';

interface IMenuHeadingProps{
  text: string;
  size?: number;
  className?: string;
}

const MenuHeading = ({text, size = 12, className}: IMenuHeadingProps) => {
  return (
    <span className={clsx(styles.heading, className)} style={{fontSize: size}}>{text}</span>
  )
}

export default MenuHeading;