import Image from "next/image";
import Left from "../public/img/slider/icon-arrow-left.svg";
import Right from "../public/img/slider/icon-arrow-right.svg";
import Slider1 from "../public/img/slider/slider-1.jpg";
import Slider2 from "../public/img/slider/slider-2.jpg";
import Slider3 from "../public/img/slider/slider-3.jpg";
import Slider4 from "../public/img/slider/slider-4.jpg";
import Slider5 from "../public/img/slider/slider-5.jpg";

const Slider = () => {
  return (
    <div className="mx-auto mt-28">
      <h1 className="text-4xl font-bold text-center mb-10">My Work</h1>
      <div className="mx-auto left-0 relative overflow-hidden inline-flex">
        <Image src={Slider1} className="rounded-lg" />
        <Image src={Slider2} className="rounded-lg" />
        <Image src={Slider3} className="rounded-lg" />
        <Image src={Slider4} className="rounded-lg" />
        <Image src={Slider5} className="rounded-lg" />
      </div>
      <div className="flex justify-center mt-10">
        <a href="#" className="px-6 py-5 rounded-full mx-3 bg-black hover:bg-purple transition duration-300">
          <Image src={Left} />
        </a>
        <a href="#" className="px-6 py-5 rounded-full mx-3 bg-black hover:bg-purple transition duration-300">
          <Image src={Right} />
        </a>
      </div>
    </div>
  );
};

export default Slider;
