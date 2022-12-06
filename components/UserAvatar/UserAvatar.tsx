import Image from 'next/image';
import styles from './UserAvatar.module.scss';

interface IUserAvatarProps{
  width?: number;
  height?: number;
  avatarUrl: string;
}

const UserAvatar = ({height = 40, width = 40, avatarUrl}: IUserAvatarProps) => {
  
  const profilePictureLoader=()=>{
    return avatarUrl;
  }

  return (
    <div className={styles.wrapper}>
      <Image
              loader={profilePictureLoader}
              src={avatarUrl}
              width={width}
              height={height}
              alt="user profile picture"
              className={styles.image}
              unoptimized
            />
    </div>
  )
}

export default UserAvatar