import { Basketball, Briefcase, DotsThree, House } from 'phosphor-react';
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './IntroductionBlock.module.scss';
import Block from '../Block/Block';
import {CustomPopover as Popover} from '../radixui/Popover';


const IntroductionBlock = () => {
  return (
    <Block className={styles.wrapper}>
      <Block.Head className={styles.header}>
        <MenuHeading text='Introduction' size={16} />
        <Popover />
      </Block.Head>
      <Block.Body className={styles.body}>
        <div className={styles.topic}><Briefcase size={22} /><span>Works at <a href="#">Helorelabs</a></span></div>
        <div className={styles.topic}><House size={22} /><span>Lives in <a href="#">Magé, RJ</a></span></div>
        <div className={styles.topic}><Basketball size={22} /><span>Player name <a href="#">Helore</a></span></div>
      </Block.Body>
    </Block>
  )
}

export default IntroductionBlock;