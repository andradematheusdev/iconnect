import { useState } from 'react';
import styles from './PostInput.module.scss';

const PostInput = () => {
  const [postText, setPostText] = useState("");

  return (
    <textarea
    className={styles.post}
      name="post"
      id="post"
      rows={1}
      placeholder="What are you thinking about?..."
      onChange={(e) => setPostText(e.target?.value)}
    ></textarea>
  )
}

export default PostInput