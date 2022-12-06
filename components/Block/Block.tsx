import clsx from 'clsx';
import styles from './Block.module.scss';

interface IBlockProps{
  children: React.ReactNode | string | null;
  className?: string;
}

const Block = ({ children, className }: IBlockProps) => {
  return(
    <div className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};
const Head = ({children, className}: IBlockProps) => {
  return(
    <div className={clsx(styles.head, className)}>
      {children}
    </div>
  );
};
const Body = ({children, className}: IBlockProps) => {
  return(
    <div className={clsx(styles.body, className) }>
      {children}
    </div>
  );
};

Block.Head = Head;
Block.Body = Body;

export default Block;