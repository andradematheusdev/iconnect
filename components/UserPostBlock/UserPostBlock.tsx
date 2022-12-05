import Block from '../Block/Block';
import styles from './UserPostBlock.module.scss';

const UserPostBlock = () => {
  return (
    // <div className={styles.wrapper}>
    //   <div className={styles.header}>
    //     Header
    //   </div>
    //   <div className={styles.body}>
    //     Body
    //   </div>
    // </div>
    <Block>
      <Block.Head>
        Head Test
      </Block.Head>
      <Block.Body>
        Body Test
      </Block.Body>
    </Block>    
  )
}

export default UserPostBlock