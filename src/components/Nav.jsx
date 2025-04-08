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

        <button
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-[88px] left-0 right-0 bg-white shadow-lg z-50 py-4 md:hidden">
          {/* 모바일에서 드롭다운 메뉴에 검색창 표시 */}
          <form className="px-4 mb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-[8px] p-3 border border-gray-300"
              value={text}
              onChange={handleChange}
            />
          </form>

          <ul className="flex flex-col">
            <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">하트</li>
            <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
              장바구니
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
              로그인
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
