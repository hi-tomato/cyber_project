import React from 'react';
import Visual from './Visual';
import Nav from './Nav';
import Banners from './Banners';

export default function Header() {
  return (
    <header className="">
      <Nav />
      <Visual />
      <Banners />
    </header>
  );
}
