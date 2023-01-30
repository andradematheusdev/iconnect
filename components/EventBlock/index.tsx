import Image from 'next/image';
import styles from './EventBlock.module.scss';
import { Block } from '../';

export const EventBlock = () => {
  return (
    <Block className={styles.wrapper}>
      <Block.Head className={styles.head}>
        <Image src={'/images/user/cover/cover.jpg'} fill alt='User next event.' style={{objectFit: 'cover'}} />
        <div className={styles.date}>
          <div className={styles.month}>Jan</div>
          <div className={styles.day}>01</div>
        </div>
      </Block.Head>
      <Block.Body className={styles.eventData}>
        <h4>Winter Wonderland</h4>
        <span>01st Jan, 2022 07:00AM</span>
      </Block.Body>
    </Block>
  )
}