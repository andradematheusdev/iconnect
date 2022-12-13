import Link from 'next/link';
import styles from '../styles/modules/Logo.module.scss';

export default function Logo() {
  return (
    <Link href={'/'}><span className={styles.logo}>ICONNECT</span></Link>
  )
}
