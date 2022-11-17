import styles from './MenuHeading.module.scss';

interface IMenuHeadingProps{
  text: string;
}

export default function MenuHeading({text}: IMenuHeadingProps) {
  return (
    <span className={styles.heading}>{text}</span>
  )
}
