import Block from '../Block/Block';
import UserAvatar from '../UserAvatar/UserAvatar';
import styles from './UserPostBlock.module.scss';

const UserPostBlock = () => {
  return (
    <Block>
      <Block.Head>
        <UserAvatar />
      </Block.Head>
      <Block.Body>
        Body Test
      </Block.Body>
    </Block>    
  )
}

export default UserPostBlock