import React, { useState } from 'react';

export default function Nav() {
  const [text, setText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center h-[88px]">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold whitespace-nowrap">
          <img src="./images/logo.png" alt="LOGO" />
        </h1>

        <form
          className="hidden sm:block max-w-[372px] w-full mx-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-[8px] p-3 border border-gray-300"
            value={text}
            onChange={handleChange}
          />
        </form>

        <ul className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 items-center">
          <li className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src="./images/favorites.png" alt="favorites" />
          </li>
          <li className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src="./images/cart.png" alt="cart" />
          </li>
          <li className="cursor-pointer hover:opacity-70 transition-opacity">
            <img src="./images/user.png" alt="user" />
          </li>
        </ul>

        {/* 햄버거 */}
        <button className="block md:hidden" onClick={toggleMenu}>
          ㅡ
        </button>
      </nav>
    </div>
  );
}
