import React from 'react';
import logo from '../../../assets/logo.png';
import styles from './Banner.module.scss';

const Banner = () => (
  <div
    className={styles.banner}
  >
    <div
      className={styles.banner__title}
    >
      <span>Find</span>
      <span>your next</span>
      <span>investiment!</span>
    </div>
    <div
      className={styles.banner__img}
    >
      <img src={logo} alt="logo" width="90%" />
    </div>
  </div>
);

export default Banner;
