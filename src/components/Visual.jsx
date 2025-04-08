import React from 'react';

export default function Visual() {
  return (
    <div
      className="
      bg-black text-white relative w-full
        min-h-[769px] md:min-h-[632px]
        flex items-center justify-center
      "
    >
      <div
        className="
          max-w-[1440px] w-full
          mx-auto
          flex flex-col md:flex-row
          px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[160px]
          relative h-full
        "
      >
        {/* 텍스트 섹션 - 모바일에서는 위에, PC에서는 왼쪽에 배치 */}
        <div
          className="
            w-full md:w-1/2
            flex flex-col justify-center
            text-center md:text-left
            order-1 md:order-1
            py-8 md:py-0
            mt-12 md:mt-0
          "
        >
          <span
            className="
              text-[25px] text-lg sm:text-xl md:text-2xl 
              font-semibold opacity-40 
              mb-4 sm:mb-5 md:mb-[24px]
            "
          >
            Pro.Beyond.
          </span>
          <h1
            className="
              text-[72px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
              mb-4 sm:mb-5 md:mb-[24px]
              font-light
            "
          >
            <span>
              IPhone 14 <span className="font-bold">Pro</span>
            </span>
          </h1>
          <p
            className="
              text-[19px] sm:text-base md:text-lg 
              opacity-40 font-medium 
              mb-6 sm:mb-8 md:mb-[24px]
              max-w-[714px]
            "
          >
            Created to change everything for the better. For everyone
          </p>

          <button
            className="
              w-[191px] h-[56px] 
              border border-[#fff] rounded-xl
              mx-auto md:mx-0
              hover:bg-white hover:text-black transition-colors
            "
          >
            Shop Now
          </button>
        </div>

        {/* 이미지 섹션 - 모바일에서는 아래에, PC에서는 오른쪽에 배치 */}
        <div
          className="
            w-full md:w-1/2
            flex items-end justify-center
            order-2
            mt-auto md:mt-0
            h-[344px] md:h-auto
          "
        >
          <div
            className="
              w-full max-w-[500px] 
              h-full md:h-[640px]
              
              bg-no-repeat bg-contain bg-center md:bg-bottom
            "
            style={{ backgroundImage: 'url(/images/Iphone_Image.png)' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
