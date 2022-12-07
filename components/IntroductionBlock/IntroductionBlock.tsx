import { Basketball, Briefcase, DotsThree, House } from 'phosphor-react';
import MenuHeading from '../MenuHeading/MenuHeading';
import styles from './IntroductionBlock.module.scss';
import Block from '../Block/Block';


const IntroductionBlock = () => {
  return (
    <Block className={styles.wrapper}>
      <Block.Head className={styles.header}>
        <MenuHeading text='Introduction' size={16} />
        <DotsThree size={24} color={"#fff"} weight="bold" />
      </Block.Head>
      <Block.Body className={styles.body}>
        <div className={styles.topic}><Briefcase size={22} /><span>Works at <a href="#"><b>Helorelabs</b></a></span></div>
        <div className={styles.topic}><House size={22} /><span>Lives in <b>Magé, RJ</b></span></div>
        <div className={styles.topic}><Basketball size={22} /><span>Player name <b>Helore</b></span></div>
      </Block.Body>
    </Block>
  )
}

export default IntroductionBlock;