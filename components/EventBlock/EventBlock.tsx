import Image from 'next/image';
import styles from './EventBlock.module.scss';

export default function EventBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.eventHead}>
        <Image src={'/images/user/cover/cover.jpg'} fill alt='User next event.' style={{objectFit: 'cover'}} />
        <div className={styles.date}>
          <div className={styles.month}>Jan</div>
          <div className={styles.day}>01</div>
        </div>
      </div>
      <div className={styles.eventData}>
        <h4>Winter Wonderland</h4>
        <span>01st Jan, 2022 07:00AM</span>
      </div>
    </div>
  )
}
