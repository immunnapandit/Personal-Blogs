import React from 'react';

const Community = () => {
  return (
    <div className="flex relative z-[10] flex-col w-full items-center justify-center mb-20">
      <div className="md:text-[50px] text-[28px] xs:text-[26px] font-bold tracking-wide">
        <h1>Connect with our community</h1>
      </div>
      <div className="md:flex md:justify-center md:items-center sm:w-fit w-full">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-14 xl:gap-24 mt-10 w-full ">
          <a
            aria-label="YouTube: https://www.youtube.com/@technicalmunnapandit"
            className="bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA] relative p-[2px] md:w-[287px] 
            md:h-[270px] dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] hover:dark:border-[#FCEDEF] hover:dark:border"
            href="https://www.youtube.com/@technicalmunnapandit"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-gradient-to-tl dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] from-[#FFF8F7] via-[#FFF5F3] 
            rounded-[16px] to-[#FFFBFA] relative md:w-[283px] md:h-[266px] flex justify-center items-center py-8">
              <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg-red-600 flex flex-col 
              justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] 
              shadow-[0px_10px_20px_0px_#FBE4E0] md:px-9 md:py-12 p-5">
                <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white">10K+</p>
                <div className="flex gap-x-2 items-center">
                  <span className="group-hover:text-white text-[12px]">Youtube</span>
                  <svg className="fill-[#FF0000] dark:group-hover:fill-[#FF0000] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]" 
                  viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4 14.403L17.147 10.3651L10.4 6.3272V14.403ZM25.428 3.86409C25.597 
                  4.49669 25.714 5.34465 25.792 6.42142C25.883 7.49819 25.922 8.4269 25.922 9.23448L26 10.3651C26 13.3127 25.792 15.4797 25.428 16.8661C25.103 18.0774 24.349 18.8581 23.179 19.1946C22.568 19.3696 21.45 19.4907 
                  19.734 19.5715C18.044 19.6657 16.497 19.706 15.067 19.706L13 19.7868C7.553 19.7868 4.16 19.5715 2.821 19.1946C1.651 18.8581 0.897 18.0774 0.572 16.8661C0.403 16.2335 0.286 15.3855 0.208 14.3087C0.117 13.232 0.0779999 12.3033 0.0779999 11.4957L0 10.3651C0 7.41743 0.208 5.25043 0.572 3.86409C0.897 2.65273 1.651 1.87207 2.821 1.53558C3.432 1.36061 4.55 1.23947 6.266 1.15871C7.956 1.0645 9.503 1.02412 10.933 1.02412L13 0.943359C18.447
                  0.943359 21.84 1.15871 23.179 1.53558C24.349 1.87207 25.103 2.65273 25.428 3.86409Z"></path></svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
