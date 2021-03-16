import React from 'react';
import style from './Hero.module.css';

const Hero = ({ handleLogout }) => {
  return (
    <section className={style.hero}>
      <nav className={style.navigation}>
        <h2 className={style.navigation_title}>Welcome</h2>
        <button className={style.button} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </section>
  );
};

export default Hero;
