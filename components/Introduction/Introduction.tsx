import { Basketball, Briefcase, DotsThree, House } from 'phosphor-react';
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MenuHeading text='Introduction' size={16} />
        <DotsThree size={24} color={"#fff"} weight="bold" />
      </div>
      <div className={styles.body}>
        <div className={styles.topic}><Briefcase size={22} /><span>Works at <b>Helorelabs</b></span></div>
        <div className={styles.topic}><House size={22} /><span>Lives in <b>Magé, RJ</b></span></div>
        <div className={styles.topic}><Basketball size={22} /><span>Player name <b>Helore</b></span></div>
      </div>
    </div>
  )
}
