import Image from 'next/image';
import styles from './ProfileMain.module.scss';

export default function ProfileMain() {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <Image src={"/images/user/cover/cover.jpg"} alt="User profile cover." style={{objectFit: 'cover'}} fill/>
      </div>
      <div className={styles.user}>
        <Image
          loader={profilePictureLoader}
          src={"https://github.com/andradematheusdev.png"}
          alt="User profile picture."
          width={200}
          height={200}
          className={styles.mainProfilePicture}
          unoptimized
        />
        <span>Matheus Andrade</span>
      </div>
      <ul className={styles.profileNav}>
        <li className={styles.active}>Timeline</li>
        <li>About</li>
        <li>Friends</li>
        <li>Photo</li>
        <li>More</li>
      </ul>
    </div>
  )
}
