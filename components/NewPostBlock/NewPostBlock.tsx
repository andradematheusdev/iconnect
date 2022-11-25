import styles from './NewPostBlock.module.scss';

const NewPostBlock = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.header}>
        <li className={styles.active}>Status</li>
        <li>Photos</li>
        <li>Videos</li>
      </ul>
    </div>
  )
}

export default NewPostBlock;