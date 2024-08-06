import Image from "next/image";
import { FC } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";

interface Project {
  id: number;
  name: string;

  image: string;
  link?: string;
}

const Projects: FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "BMW A",
      image: "/image/bmw12.jpg",
      link: "",
    },
    {
      id: 2,
      name: "BMW B",
      image: "/image/bmw8.jpg",
      link: "",
    },
    {
      id: 3,
      name: "BMW C",
      image: "/image/bmw.jpg",
    },
    {
      id: 4,
      name: "BMW D",
      image: "/image/bmw9.jpg",
    },
    {
      id: 5,
      name: "BMW E",
      image: "/image/bmw10.jpg",
    },
    {
      id: 6,
      name: "BMW F",
      image: "/image/bmw11.jpg",
    },
    {
      id: 7,
      name: "BMW G",
      image: "/image/bmw2.jpg",
    },
    {
      id: 8,
      name: "BMW H",
      image: "/image/bmw4.jpg",
    },
    {
      id: 9,
      name: "BMW I",
      image: "/image/bmw7.jpg",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/image/bannerbmw.jpg')] bg-center bg-cover mt-auto max-w-screen-xl m-auto">
        <center>
          <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white"></h1>
        </center>
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-3 gap-8 py-6 mt-auto max-w-screen-xl m-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg group "
          >
            <div>
              <Image
                src={project.image}
                width={480}
                height={380}
                alt={project.name}
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full p-12 text-sm text-white transition duration-200 ease-in-out transform translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-5 ">
              <h1 className=" mt-auto max-w-screen-md m-auto">
                {project.name}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center py-24  space-y-2">
        <h1 className="text-4xl font-bold text-center"> Products</h1>
        <div className="lg:grid lg:grid-cols-3 gap-12 px-4 py-24 w-full">
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 1</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 3,033 Milyar
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw1.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 2</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                {" "}
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 2,033 Milyar
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw4.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 3</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                {" "}
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 3,033 Milyar
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw5.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 4</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                {" "}
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 4,033 Milyar
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw7.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 5</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                {" "}
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 5,033 Milyar
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col space-y-3 border border-gray-300">
            <div
              className="bg-no-repeat bg-cover bg-center w-full h-64"
              style={{
                backgroundImage: `url(/image/bmw8.jpg)`,
              }}
            >
              <div className="bg-black  bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-xl  p-8">BMW 6</p>
              </div>
            </div>
            <div className="py-1 flex flex-row space-x-2 items-center justify-center">
              <BiSolidUser className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                {" "}
                1,1 Juta Unit
              </p>
              <FaDollarSign className="w-5 h-5 text-gray-500" />
              <p className="border rounded-full p-2 text-gray-500">
                Rp 6,001 Milyar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-5">
        <div className="pt-8 pb-4">
          <h1 className="text-4xl font-bold tracking-wider text-center">
            Testimonials
          </h1>
        </div>
        <div className="grid gap-35 py-4 lg:grid-cols-4">
          <div className="border-2 border-gray-500 ">
            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
              <Image
                src="/image/ronaldo.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl font-semibold">Cristiano Ronaldo</h2>
              <p className="text-sm text-gray-400">
                BMW selalu memberikan pengalaman berkendara yang luar biasa
                dengan performa yang tak tertandingi dan desain yang elegan.
                Saya sangat puas!
              </p>
            </div>
          </div>
          <div className="border-2 border-gray-500 ">
            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
              <Image
                src="/image/leo.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl font-semibold">Lionel Messi</h2>
              <p className="text-sm text-gray-400">
                Saya sangat terkesan dengan kualitas dan teknologi canggih yang
                ditawarkan BMW. Mobil ini benar-benar merek premium yang dapat
                diandalkan.
              </p>
            </div>
          </div>
          <div className="border-2 border-gray-500 ">
            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
              <Image
                src="/image/lewa.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl font-semibold">
                Robert Lewandowski
              </h2>
              <p className="text-sm text-gray-400">
                BMW adalah kombinasi sempurna antara kenyamanan dan performa.
                Setiap perjalanan dengan mobil ini selalu menyenangkan dan
                memuaskan.
              </p>
            </div>
          </div>
          <div className="border-2 border-gray-500 ">
            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
              <Image
                src="/image/felix.jpg"
                width={200}
                height={200}
                alt=""
                className="mx-auto rounded-full "
              />
              <h2 className="py-4 text-2xl font-semibold">João Félix</h2>
              <p className="text-sm text-gray-400">
                BMW adalah kombinasi sempurna antara kenyamanan dan performa.
                Setiap perjalanan dengan mobil ini selalu menyenangkan dan
                memuaskan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
