import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './Story.module.scss';

const Story = () => {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <li className={styles.wrapper}>
      <UserAvatar
        avatarUrl='https://github.com/andradematheusdev.png'
        className={styles.picture}
      />       
      <div className={styles.data}>
        <span className={styles.name}>Matheus Andrade</span>
        <span className={styles.time}>15 minutes ago</span>
      </div>
    </li>
  )
}

export default Story;