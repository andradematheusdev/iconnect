import Image from "next/image";
import { Bell, CaretDown, EnvelopeSimple } from "phosphor-react";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <div className={styles.wrapper}>
      <EnvelopeSimple size={18} weight="bold" />
      <Bell size={18} weight="bold" />
      <div className={styles.user}>
        <span className={styles.username}>Matheus</span>
        <Image
          loader={profilePictureLoader}
          src="https://github.com/andradematheusdev.png"
          width={24}
          height={24}
          alt="user profile picture"
          className={styles['profile-picture']}
        />
        <a role={'button'}>
          <CaretDown size={12} weight="bold" />
        </a>
      </div>
    </div>
  )
}

export default UserMenu;