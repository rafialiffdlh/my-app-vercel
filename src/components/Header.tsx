import Image from "next/image";
import Logo from "@/../public/iconbwm-removebg.png";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <div className="bg-zinc-50 mt-auto max-w-screen-xl m-auto">
      <div className=" bg-zinc-100 backdrop-blur-lg">
        <div className="container flex items-center justify-between py-8">
          <Image src={Logo} alt="logo" className="w-20 h-15" />
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
