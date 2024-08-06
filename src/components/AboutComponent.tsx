import Image from "next/image";
import { FC } from "react";

const AboutComponent: FC = () => {
  return (
    <div className="bg-zinc-300 mt-auto max-w-screen-xl m-auto">
      <div className="flex items-center justify-between pb-10"></div>
      <div className="grid lg:grid-cols-2 place-items-center w-full">
        <div>
          <Image
            src="/image/bmw4.jpg"
            width={500}
            height={100}
            alt="About Front Image"
            className="max-md:hidden"
          />
        </div>

        <div className="items-center">
          <a
            className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl"
            href="#"
          >
            <center>
              An Elegant Space, <br />
              Perfected with Harmony
            </center>
          </a>

          <p className="px-14 pb-2">
            BMW Interior Excellence is a company dedicated to the art of
            interior design. We provide the finest interior designs for your
            home, seamlessly blending luxury and comfort. Trusted by many, we
            have established a reputation for excellence in home design. Our
            commitment to quality has earned us numerous awards from prestigious
            institutions worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
