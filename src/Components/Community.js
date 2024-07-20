import React from 'react';

const Community = () => {
  return (
    <div className="flex relative z-[10] flex-col w-full items-center justify-center mb-20">
      <div className="md:text-[50px] text-[28px] xs:text-[26px] font-bold tracking-wide">
        <h1>Connect with our community</h1>
      </div>
      <div className="md:flex md:justify-center md:items-center sm:w-fit w-full">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 md:gap-14 xl:gap-24 mt-10 w-full">
          {/* YouTube */}
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
                <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white">1K+</p>
                <div className="flex gap-x-2 items-center">
                  <span className="group-hover:text-white text-[12px]">YouTube</span>
                  <svg className="fill-[#FF0000] dark:group-hover:fill-[#FF0000] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]" 
                  viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4 14.403L17.147 10.3651L10.4 6.3272V14.403ZM25.428 3.86409C25.597 
                    4.49669 25.714 5.34465 25.792 6.42142C25.883 7.49819 25.922 8.4269 25.922 9.23448L26 10.3651C26 13.3127 25.792 15.4797 25.428 16.8661C25.103 18.0774 24.349 18.8581 23.179 19.1946C22.568 19.3696 21.45 19.4907 
                    19.734 19.5715C18.044 19.6657 16.497 19.706 15.067 19.706L13 19.7868C7.553 19.7868 4.16 19.5715 2.821 19.1946C1.651 18.8581 0.897 18.0774 0.572 16.8661C0.403 16.2335 0.286 15.3855 0.208 14.3087C0.117 13.232 0.0779999 12.3033 0.0779999 11.4957L0 10.3651C0 7.41743 0.208 5.25043 0.572 3.86409C0.897 2.65273 1.651 1.87207 2.821 1.53558C3.432 1.36061 4.55 1.23947 6.266 1.15871C7.956 1.0645 9.503 1.02412 10.933 1.02412L13 0.943359C18.447
                    0.943359 21.84 1.15871 23.179 1.53558C24.349 1.87207 25.103 2.65273 25.428 3.86409Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          {/* LinkedIn */}
          <a
            aria-label="LinkedIn: https://www.linkedin.com/in/immunnapandit"
            className="bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA] relative p-[2px] md:w-[287px] 
            md:h-[270px] dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] hover:dark:border-[#FCEDEF] hover:dark:border"
            href="https://www.linkedin.com/in/immunnapandit"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-gradient-to-tl dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] from-[#FFF8F7] via-[#FFF5F3] 
            rounded-[16px] to-[#FFFBFA] relative md:w-[283px] md:h-[266px] flex justify-center items-center py-8">
              <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg-blue-600 flex flex-col 
              justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] 
              shadow-[0px_10px_20px_0px_#FBE4E0] md:px-9 md:py-12 p-5">
                <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white">8K+</p>
                <div className="flex gap-x-2 items-center">
                  <span className="group-hover:text-white text-[12px]">LinkedIn</span>
                  <svg className="fill-[#0077B5] dark:group-hover:fill-[#0077B5] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]" 
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.73v20.54C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.27V1.73C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9.048h3.5v11.404zM5.31 7.66h-.03c-1.17 0-1.93-.81-1.93-1.826 0-1.034.77-1.826 1.95-1.826 1.18 0 1.93.792 1.96 1.826-.02 1.017-.78 1.826-1.95 1.826zM20.45 20.452h-3.49v-5.993c0-1.525-.03-3.487-2.18-3.487-2.18 0-2.51 1.65-2.51 3.374v6.106h-3.49V9.048h3.35v1.55h.05c.47-.875 1.63-1.8 3.34-1.8 3.57 0 4.22 2.357 4.22 5.425v6.23z"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          {/* X Account */}
<a
  aria-label="X: https://x.com/immunnapandit"
  className="bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA] relative p-[2px] md:w-[287px] 
  md:h-[270px] dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] hover:dark:border-[#FCEDEF] hover:dark:border"
  href="https://x.com/immunnapandit"
  target="_blank"
  rel="noreferrer"
>
  <div className="bg-gradient-to-tl dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] from-[#FFF8F7] via-[#FFF5F3] 
  rounded-[16px] to-[#FFFBFA] relative md:w-[283px] md:h-[266px] flex justify-center items-center py-8">
    <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg-blue-400 flex flex-col 
    justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] 
    shadow-[0px_10px_20px_0px_#FBE4E0] md:px-9 md:py-12 p-5">
      <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white">1K+</p>
      <div className="flex gap-x-2 items-center">
        <span className="group-hover:text-white text-[12px]">X</span>
        <svg className="fill-[#1DA1F2] dark:group-hover:fill-[#1DA1F2] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]" 
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4.56c-.88.38-1.82.63-2.82.75a4.92 4.92 0 0 0 2.15-2.7 9.72 9.72 0 0 1-3.1 1.18A4.85 4.85 0 0 0 16.86 3c-2.68 0-4.86 2.18-4.86 4.87 0 .38.04.75.12 1.11-4.04-.2-7.62-2.14-10-5.08a4.92 4.92 0 0 0-.65 2.44 4.87 4.87 0 0 0 2.17 4.05 4.84 4.84 0 0 1-2.2-.61v.06c0 2.3 1.64 4.23 3.8 4.67a4.84 4.84 0 0 1-2.2.08c.62 1.92 2.42 3.32 4.55 3.36a9.72 9.72 0 0 1-6.02 2.08c-.39 0-.77-.02-1.15-.07a13.73 13.73 0 0 0 7.44 2.18c8.93 0 13.82-7.4 13.82-13.82 0-.21 0-.43-.02-.64A9.9 9.9 0 0 0 24 4.56z"/>
        </svg>
      </div>
    </div>
  </div>
</a>

          {/* Instagram */}
          <a
            aria-label="Instagram: https://www.instagram.com/immunnapandit"
            className="bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA] relative p-[2px] md:w-[287px] 
            md:h-[270px] dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] hover:dark:border-[#FCEDEF] hover:dark:border"
            href="https://www.instagram.com/immunnapandit"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-gradient-to-tl dark:bg-gradient-to-t dark:from-[#3333331a] dark:to-[#4d4d4d23] from-[#FFF8F7] via-[#FFF5F3] 
            rounded-[16px] to-[#FFFBFA] relative md:w-[283px] md:h-[266px] flex justify-center items-center py-8">
              <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg-pink-600 flex flex-col 
              justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] 
              shadow-[0px_10px_20px_0px_#FBE4E0] md:px-9 md:py-12 p-5">
                <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white">1K+</p>
                <div className="flex gap-x-2 items-center">
                  <span className="group-hover:text-white text-[12px]">Instagram</span>
                  <svg className="fill-[#E4405F] dark:group-hover:fill-[#E4405F] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]" 
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.16c3.2 0 3.583.012 4.85.07 1.218.056 1.873.248 2.315.415a4.606 4.606 0 0 1 1.65.952c.43.43.747.946.952 1.65.166.442.358 1.097.415 2.315.058 1.266.07 1.65.07 4.85s-.012 3.583-.07 4.85c-.056 1.218-.248 1.873-.415 2.315a4.606 4.606 0 0 1-.952 1.65c-.43.43-.946.747-1.65.952-.442.166-1.097.358-2.315.415-1.266.058-1.65.07-4.85.07s-3.583-.012-4.85-.07c-1.218-.056-1.873-.248-2.315-.415a4.606 4.606 0 0 1-1.65-.952 4.606 4.606 0 0 1-.952-1.65c-.166-.442-.358-1.097-.415-2.315-.058-1.266-.07-1.65-.07-4.85s.012-3.583.07-4.85c.056-1.218.248-1.873.415-2.315a4.606 4.606 0 0 1 .952-1.65c.43-.43.946-.747 1.65-.952.442-.166 1.097-.358 2.315-.415 1.266-.058 1.65-.07 4.85-.07m0-2.16C8.74 0 8.332 0 7.053.07c-1.31.06-2.22.262-3 .55a6.685 6.685 0 0 0-2.417 1.415A6.685 6.685 0 0 0 .72 4.953c-.288.78-.49 1.69-.55 3C.1 8.332 0 8.74 0 12s.1 3.668.17 4.947c.06 1.31.262 2.22.55 3a6.685 6.685 0 0 0 1.415 2.417A6.685 6.685 0 0 0 4.953 23.28c.78.288 1.69.49 3 .55 1.278.07 1.686.17 4.047.17s2.769-.1 4.047-.17c1.31-.06 2.22-.262 3-.55a6.685 6.685 0 0 0 2.417-1.415 6.685 6.685 0 0 0 1.415-2.417c.288-.78.49-1.69.55-3 .07-1.278.17-1.686.17-4.047s-.1-2.769-.17-4.047c-.06-1.31-.262-2.22-.55-3a6.685 6.685 0 0 0-1.415-2.417A6.685 6.685 0 0 0 19.047.72c-.78-.288-1.69-.49-3-.55C15.668.1 15.26 0 12 0zM12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 0 1-1.44-1.44 1.44 1.44 0 1 1 2.88 0 1.44 1.44 0 0 1-1.44 1.44z"/>
                  </svg>
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
