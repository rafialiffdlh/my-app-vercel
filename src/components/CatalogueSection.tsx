"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";
import React from "react";

interface CatalogueItem {
  id: string;
  catagory: string;
  title: string;
  image: string;
  description: string;
}

const CatalogueSection: React.FC = () => {
  const items: CatalogueItem[] = [
    {
      id: "01",
      catagory: "BMW M3",
      title: "About m3",
      image: "/image/bmwm3.jpg",
      description:
        "The BMW M3 is the perfect blend of performance and comfort.",
    },
    {
      id: "02",
      catagory: "BMW M4",
      title: "About M4",
      image: "/image/bmwm4.jpg",
      description:
        "The BMW M4 is the epitome of power and elegance in one package.",
    },
    {
      id: "03",
      catagory: "BMW E46",
      title: "About E46",
      image: "/image/bmwe46.jpg",
      description:
        "The BMW E46 is the embodiment of classic elegance and dynamic performance.",
    },
    {
      id: "04",
      catagory: "BMW E36",
      title: "About E36",
      image: "/image/bmwe36.jpg",
      description:
        "The BMW E36 is a symbol of iconic performance and timeless design.",
    },
  ];

  return (
    <div className="bg-zinc-50 mt-auto max-w-screen-xl m-auto">
      <div className="pt-8 pb-4"></div>
      <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <div>
              <Image
                src={item.image}
                width={380}
                height={100}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
              <div className="flex justify-between pb-4">
                <p className="text-sm">{item.catagory}</p>
                <span className="text-sm">{item.id}</span>
              </div>
              <a className="block text-xl font-semibold" href="#">
                {item.title}
              </a>
              <p className="py-4 text-gray-500">{item.description}</p>
              <a className="inline-flex items-center font-medium" href="#">
                See Details <TbArrowNarrowRight className="ml-2 text-xl" />
              </a>
            </div>

            <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
              <p className="tracking-wider -rotate-90">{item.catagory}</p>
              <span>{item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueSection;
