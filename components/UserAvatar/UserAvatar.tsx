import Image from 'next/image';
import styles from './UserAvatar.module.scss';

const UserAvatar = () => {
  
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <Image
            loader={profilePictureLoader}
            src="https://github.com/andradematheusdev.png"
            width={40}
            height={40}
            alt="user profile picture"
            className={styles.image}
            unoptimized
          />
  )
}

export default UserAvatar