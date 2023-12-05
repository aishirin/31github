// components/Header.tsx
import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.link}>
          <div className={styles.block}>Главная</div>
        </a>
      </Link>
      <Link href="/traffic-lights">
        <a className={styles.link}>
          <div className={styles.block}>Светофоры</div>
        </a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>
          <div className={styles.block}>О нас</div>
        </a>
      </Link>
      <Link href="/login">
        <a className={styles.link}>
          <div className={styles.block}>Логин</div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
