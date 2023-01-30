import { Basketball, Briefcase, House, Pencil } from 'phosphor-react';
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './IntroductionBlock.module.scss';
import { Block } from '../';
import {CustomPopover as Popover} from '../radixui/Popover';


export const IntroductionBlock = () => {
  return (
    <Block className={styles.wrapper}>
      <Block.Head className={styles.header}>
        <MenuHeading text='About' size={16} />
        <a role={'button'}><Pencil size={18} color={"#fff"} /></a>
      </Block.Head>
      <Block.Body className={styles.body}>
        <div className={styles.topic}><Briefcase size={22} /><span>Works at <a href="#">Helorelabs</a></span></div>
        <div className={styles.topic}><House size={22} /><span>Lives in <a href="#">Magé, RJ</a></span></div>
        <div className={styles.topic}><Basketball size={22} /><span>Player name <a href="#">Helore</a></span></div>
      </Block.Body>
    </Block>
  )
}