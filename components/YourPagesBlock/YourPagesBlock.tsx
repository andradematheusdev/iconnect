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
          width={24}
          height={24}
          alt="user profile picture"
          className={styles.image}
        />        
        <span className={styles.name}>Matheus Andrade</span>
    </li>
  )
}

export default YourPagesBlock;