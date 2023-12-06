// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.block}>О нас</div>
      <div className={styles.block}>
        Контакты:
        <div>Телефон: +1 123 456 7890</div>
        <div>Email: info@example.com</div>
      </div>
    </div>
  );
};

export default Footer;
