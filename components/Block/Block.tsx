import styles from './Block.module.scss';

interface IBlockProps{
  children: React.ReactNode | string | null;
}

const Block = ({ children }: IBlockProps) => {
  return(
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};
const Head = ({children}: IBlockProps) => {
  return(
    <div className={styles.head}>
      {children}
    </div>
  );
};
const Body = ({children}: IBlockProps) => {
  return(
    <div className={styles.body }>
      {children}
    </div>
  );
};

Block.Head = Head;
Block.Body = Body;

export default Block;