import React from 'react';
import Visual from './Visual';
import Nav from './Nav';
// import Banners from './Banners';

export default function Header() {
  return (
    <header className="w-full overflow-x-hidden">
      <div className="px-4 md:px-[11.11%] max-w-[1440px]">
        <Nav />
      </div>
      <Visual />
      {/* <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Banners />
      </div> */}
    </header>
  );
}
