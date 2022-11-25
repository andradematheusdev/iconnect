import { DotsThree } from 'phosphor-react';
import Image from "next/image";
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './YourPagesBlock.module.scss';

const YourPagesBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MenuHeading text='Introduction' size={16} />
        <DotsThree size={24} color={"#fff"} weight="bold" />
      </div>
    <div className={styles.body}>
      
    </div>
  </div>
  )
}

export const Contact = () => {
  const profilePictureLoader = () => {
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

export default YourPagesBlock;