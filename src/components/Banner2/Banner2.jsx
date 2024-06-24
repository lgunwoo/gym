import React from "react";
import BannerImg from "../../assets/bad.png";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
                <div>
                  <p className="text-primary"></p>
                  <h1 className="text-2xl sm:text-4xl font-bold">배드민턴</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                살도 많이 빠집니다
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                은근 사람도 많고 여자도 많아요
              </p>
              <button data-aos="fade-up" className="button-outline">
                나도 해보고 싶은 운동
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt="bad.png"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
