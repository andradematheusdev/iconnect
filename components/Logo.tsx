import Link from 'next/link';
import styles from '../styles/Logo.module.scss';

export default function Logo() {
  return (
    <Link href={'/'}><span className={styles.logo}>ICONNECT</span></Link>
  )
}
