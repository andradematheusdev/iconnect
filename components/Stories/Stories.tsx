import Image from 'next/image';
import styles from './Stories.module.scss';

const Stories = () => {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <li className={styles.wrapper}>
      <Image
          loader={profilePictureLoader}
          src="https://github.com/andradematheusdev.png"
          width={24}
          height={24}
          alt="user profile picture"
          className={styles.picture}
          unoptimized
        />
        <div>
          <span className={styles.name}>Matheus Andrade</span>
          <span className={styles.time}>29 Minutes Ago</span>
        </div>
    </li>
  )
}

export default Stories;