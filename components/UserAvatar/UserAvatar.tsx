import clsx from 'clsx';
import Image from 'next/image';
import styles from './UserAvatar.module.scss';

interface IUserAvatarProps{
  width?: number;
  height?: number;
  avatarUrl: string;
  className?: string;
}

const UserAvatar = ({height = 40, width = 40, avatarUrl, className}: IUserAvatarProps) => {
  
  const profilePictureLoader=()=>{
    return avatarUrl;
  }

  return (
      <Image
              loader={profilePictureLoader}
              src={avatarUrl}
              width={width}
              height={height}
              alt="user profile picture"
              className={clsx(styles.image, className)}
              unoptimized
            />
  )
}

export default UserAvatar