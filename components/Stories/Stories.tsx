import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './Stories.module.scss';

const Stories = () => {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <li className={styles.wrapper}>
      <UserAvatar
        avatarUrl='https://github.com/andradematheusdev.png'
        className={styles.picture}
        width={56}
        height={56}
      />       
      <span className={styles.name}>Matheus Andrade</span>
    </li>
  )
}

export default Stories;