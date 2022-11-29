import Image from 'next/image';
import { MapPin, Smiley, UserCircle } from 'phosphor-react';
import Button from '../Button/Button';
import PostInput from '../PostInput/PostInput';

import styles from './NewPostBlock.module.scss';

const NewPostBlock = () => {
  const profilePictureLoader=()=>{
    return `https://github.com/andradematheusdev.png`;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.header}>
        <li className={styles.active}>Status</li>
        <li>Photos</li>
        <li>Videos</li>
      </ul>
      <div className={styles.inputArea}>
        <Image
            loader={profilePictureLoader}
            src="https://github.com/andradematheusdev.png"
            width={40}
            height={40}
            alt="user profile picture"
            className={styles.picture}
            unoptimized
          />
          <PostInput />
      </div>
      <ul className={styles.footer}>
        <li><span><UserCircle size={24} /></span> People</li>
        <li><span><MapPin size={24} /></span> Check-in</li>
        <li><span><Smiley size={24} /> </span> Mood</li>
        <li><Button text='Share' /></li>
      </ul>
    </div>
  )
}

export default NewPostBlock;