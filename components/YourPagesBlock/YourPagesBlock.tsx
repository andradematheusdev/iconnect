import { DotsThree } from 'phosphor-react';
import Image from "next/image";
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './YourPagesBlock.module.scss';

const YourPagesBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MenuHeading text='Your Pages' size={16} />
        <DotsThree size={24} color={"#fff"} weight="bold" />
      </div>
    <div className={styles.body}>
      <ul className={styles.pageWrapper}>
        <Pages />
      </ul>
    </div>
  </div>
  )
}

const Pages = () => {
  return (
    <li>
      <Image
          src="/images/user/cover/cover.jpg"
          width={44}
          height={44}
          alt="user profile picture"
          style={{objectFit: 'cover'}}
          className={styles.image}
        />        
        <span className={styles.name}>Matheus Andrade</span>
    </li>
  )
}

export default YourPagesBlock;