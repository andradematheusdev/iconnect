import Block from '../Block/Block';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './UserPostBlock.module.scss';

const UserPostBlock = () => {
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
      <Block.Body>
        Body Test
      </Block.Body>
    </Block>    
  )
}

export default UserPostBlock