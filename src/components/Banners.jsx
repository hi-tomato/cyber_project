import React from 'react';

export default function Banners() {
  return (
    <section className="flex">
      <article className="flex flex-wrap">
        <div className="w-[100%] h-[328px] bg-red-400">
          <div></div>
          <div className="pt-[100px] pl-[334px]">
            <h2 className="text-5xl mb-[16px]">Playstation 5</h2>
            <p className="text-sm opacity-40">
              Incredibly powerful CPUs, GPUs, and an SSD with
              <br /> integrated I/O will redefine your PlayStation
              <br /> experience.
            </p>
          </div>
        </div>

        <div className="relative w-[50%]  bg-blue-400 line-clamp-2 text-black">
          <div className="absolute h-[272px] right-[48px] top-[65px]">
            <h2 className="text-3xl line-clamp-3 mb-[8px]">
              Apple
              <br /> AirPods
              <br /> <b>Max</b>
            </h2>
            <p className="text-sm opacity-40">
              Computational audio.
              <br /> Listen,it's powerful
            </p>
          </div>
        </div>

        <div className="relative w-[50%] h-[328px] bg-yellow-400 line-clamp-3 text-white">
          <div className="absolute h-[272px] right-[48px] top-[64px]">
            <h2 className="text-2xl mb-2">
              Apple <br />
              Vision <b>Pro</b>
            </h2>
            <p>
              An immersive way to
              <br /> experience
              <br /> entertainment
            </p>
          </div>
        </div>
      </article>

      <article className='className="w-full bg-amber-950'>
        <h2>Macbook Air</h2>
        <p>
          The new 15‑inch MacBook Air makes room for more of what you love with
          a spacious Liquid Retina display.
        </p>
        <button>Shop Now</button>
      </article>
    </section>
  );
}
