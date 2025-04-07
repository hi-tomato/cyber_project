import React from 'react';

export default function Visual() {
  return (
    <div className="min-h-[350px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[632px] flex flex-col justify-center sm:block bg-black text-white pt-[188px] pl-[160px]">
      <span className="text-2xl font-semibold opacity-40 mb-[24px]">
        Pro.Beyond.
      </span>
      <p className="text-8xl mb-[24px]">
        <span className="font-semibold">IPhone 14</span> <b>Pro</b>
      </p>
      <p className="text[18px] opacity-40 font-medium mb-[24px]">
        Created to change everything for the better. For everyone
      </p>

      <button className="w-[150px] sm:w-[170px] md:w-[191px] h-[46px] sm:h-[50px] md:h-[56px] border border-[#fff] rounded-xl">
        Shop Now
      </button>
    </div>
  );
}
