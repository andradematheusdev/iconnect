import Image from "next/image";
import styles from "./Contact.module.scss";

export default function Contact() {
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
        <span className={styles.name}>Matheus Andrade</span>
        <i className={styles.status}></i>
    </li>
  )
}
