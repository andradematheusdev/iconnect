import { DotsThree } from 'phosphor-react';
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MenuHeading text='Introduction' size={16} />
        <DotsThree size={24} color={"#fff"} weight="bold" />
      </div>
    </div>
  )
}
