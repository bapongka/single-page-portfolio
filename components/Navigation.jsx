import Image from "next/image";
import Logo from "../public/img/logo.svg";

const Navigation = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <a href="#">
          <Image src={Logo} />
        </a>
        <button className="px-8 rounded-full text-lg font-semibold bg-black hover:bg-purple text-white">Free Consultation</button>
      </div>
    </div>
  );
};

export default Navigation;
