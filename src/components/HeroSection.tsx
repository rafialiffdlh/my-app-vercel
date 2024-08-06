import React from "react";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-zinc-300 mt-auto max-w-screen-xl m-auto">
      <div className="relative w-full h-72 md:h-80 lg:h-96">
        <Image
          src="/image/bmw.jpg"
          alt="Special Offer Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="flex items-center justify-between pb-10"></div>
      <div className="container py-8 text-center lg:py-0 lg:text-left grid lg:grid-cols-2">
        <div className="xl:py-14 lg:py-10">
          <center>
            <p className="tracking-widest">OFFER FOR THE BEST CAR</p>
            <h1 className="py-4 text-4xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
              BMW is not just a car, it is a lifestyle
            </h1>
            <p className="pb-6 text-gray-500 xl:pb-10">
              BMW, or Bayerische Motoren Werke, was founded in 1916 in Munich,
              Germany, initially as an aircraft engine manufacturer. In 1923,
              BMW expanded its production to motorcycles. BMW is known for its
              culture that prioritizes innovation, performance and quality. The
              company's philosophy, "Freude am Fahren" or "The Ultimate Driving
              Machine," reflects BMW's commitment to providing an exceptional
              driving experience.
            </p>
          </center>
        </div>

        <div className="w-full">
          <Image
            src="/image/bmw1.jpg"
            width={800}
            height={500}
            alt="BMW Car"
            className="right-0 w-full hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
