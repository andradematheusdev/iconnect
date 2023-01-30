import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './UserPostBlock.module.scss';
import {ReactPhotoCollage} from 'react-photo-collage';
import { Block } from '../';

export const UserPostBlock = () => {

  const settings = {
    width: '100%',
    height: ['250px', '170px'],
    layout: [2, 1],
    photos: [
      { source: '/images/user/cover/cover.jpg' },
      { source: '/images/user/cover/cover.jpg' },
      { source: '/images/user/cover/cover.jpg' },
    ],
    showNumOfRemainingPhotos: true
  };
 
  return (
    <Block className={styles.wrapper}>
      <Block.Head className={styles.head}>
          <UserAvatar avatarUrl='https://github.com/andradematheusdev.png' />
          <div className={styles.userdata}>
            <div className={styles.headline}>
              <span className={styles.username}>
                Matheus Andrade
              </span>
              <span>
                created a new
              </span>
              <span>
                <a href='#' className={styles.posttype}>
                  album
                </a>
              </span>
            </div>
            <div className={styles.time}>
              6 hours ago.
            </div>
          </div>
      </Block.Head>
      <Block.Body className={styles.body}>
        <div className={styles.posttext}>
          When the bass drops, so do my problems.
        </div>
        <div className={styles.picturegrid}>
          <ReactPhotoCollage {...settings} />
        </div>
      </Block.Body>
    </Block>    
  )
}

export default UserPostBlock