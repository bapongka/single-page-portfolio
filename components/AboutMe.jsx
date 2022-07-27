import Image from "next/image";
import Profile from "../public/img/profile.webp";

const AboutMe = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="flex justify-between items-center 2xl:mx-48">
        <div className="w-2/5">
          <Image src={Profile} />
        </div>
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-7">I’m Amy, and I’d love to work on your next project</h1>
          <p className="text-justify text-slate-500 text-base font-semibold mb-7">
            I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
          </p>
          <button className=" text-white text-lg font-semibold px-8 py-3 rounded-full bg-illus hover:bg-uiux transition duration-300">Free Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
