import React from 'react';

const styles = {
  container:
    'bg-black text-white relative w-full min-h-[769px] md:min-h-[632px] flex items-center justify-center',
  innerContainer:
    'max-w-[1440px] w-full mx-auto flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[160px] relative h-full',
  textSection:
    'w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-1 md:order-1 py-8 md:py-0 mt-12 md:mt-0',
  tagline:
    'text-[25px] text-lg sm:text-xl md:text-2xl font-semibold opacity-40 mb-4 sm:mb-5 md:mb-[24px]',
  title:
    'text-[72px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-5 md:mb-[24px] font-light',
  description:
    'text-[19px] sm:text-base md:text-lg opacity-40 font-medium mb-6 sm:mb-8 md:mb-[24px] max-w-[714px]',
  button:
    'w-[191px] h-[56px] border border-[#fff] rounded-xl mx-auto md:mx-0 hover:bg-white hover:text-black transition-colors',
  imageSection:
    'w-full md:w-1/2 flex items-end justify-center order-2 mt-auto md:mt-0 h-[344px] md:h-auto',
  image:
    'w-full max-w-[500px] h-full md:h-[640px] bg-no-repeat bg-contain bg-center md:bg-bottom',
};

export default function Visual() {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.textSection}>
          <span className={styles.tagline}>Pro.Beyond.</span>
          <h1 className={styles.title}>
            IPhone 14 <strong>Pro</strong>
          </h1>
          <p className={styles.description}>
            Created to change everything for the better. For everyone
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>

        <div className={styles.imageSection}>
          <div
            className={styles.image}
            style={{ backgroundImage: 'url(/images/Iphone_Image.png)' }}
          />
        </div>
      </div>
    </section>
  );
}
