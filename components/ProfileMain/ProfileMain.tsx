import Image from 'next/image';
import Link from 'next/link';
import styles from './ProfileMain.module.scss';

const ProfileMain = () => {
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
        <li className={styles.active}><Link href={"#"}>Timeline</Link></li>
        <li><Link href={"#"}>About</Link></li>
        <li><Link href={"#"}>Friends</Link></li>
        <li><Link href={"#"}>Photo</Link></li>
        <li><Link href={"#"}>More</Link></li>
      </ul>
    </div>
  )
}

export default ProfileMain;