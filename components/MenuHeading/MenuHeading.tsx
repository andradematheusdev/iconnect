import styles from './MenuHeading.module.scss';

interface IMenuHeadingProps{
  text: string;
  size?: number;
}

export default function MenuHeading({text, size = 12}: IMenuHeadingProps) {
  return (
    <span className={styles.heading} style={{fontSize: size}}>{text}</span>
  )
}
