import React from 'react';
import logo from '../../assets/logo.png';

const Banner = () => (
  <div style={{
    backgroundColor: '#f0f7ee',
    height: '90vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 60px',
  }}
  >
    <div style={{
      fontFamily: 'Alfa Slab One, cursive',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '80px',
      textShadow: '10px 10px 0 #fff',
    }}
    >
      <span style={{ height: '90px' }}>Find</span>
      <span style={{ height: '90px' }}>your next</span>
      <span style={{ height: '90px' }}>investiment!</span>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <img src={logo} alt="logo" width="90%" />
    </div>
  </div>
);

export default Banner;
