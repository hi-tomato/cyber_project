import React from 'react';
import Visual from './Visual';
import Nav from './Nav';
import Banners from './Banners';

export default function Header() {
  const styles = {
    header: 'w-full overflow-x-hidden',
    navContainer: 'px-4 md:px-[11.11%] max-w-[1440px] mx-auto',
    bannerContainer: 'max-w-[1440px] mx-auto',
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Nav />
      </div>

      <Visual />

      <div className={styles.bannerContainer}>
        <Banners />
      </div>
    </header>
  );
}
