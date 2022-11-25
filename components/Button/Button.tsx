import styles from './Button.module.scss';

interface IButtonProps{
  text: string;
}

const Button = ({text}: IButtonProps) => {
  return (
    <button className={styles.wrapper}>
      {text}
    </button>
  )
}

export default Button