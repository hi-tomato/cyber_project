import React, { useState } from 'react';

export default function Nav() {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <nav className="flex flex-wrap justify-between items-center h-[88px]">
      <h1 className="text-xl font-bold">Cyber</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[372px] rounded-[8px] p-4"
          value={text}
          onChange={handleChange}
        />
      </form>

      <ul className="hidden sm:flex gap-4 md:gap-6">
        <li>하트</li>
        <li>장바구니</li>
        <li>로그인</li>
      </ul>
    </nav>
  );
}
