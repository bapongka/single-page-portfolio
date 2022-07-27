import Image from "next/image";
import Graphic from "../public/img/hero/pattern-graphic-design.svg";
import UIUX from "../public/img/hero/pattern-ui-ux.svg";
import Apps from "../public/img/hero/pattern-apps.svg";
import Photography from "../public/img/hero/pattern-photography.svg";
import Illustrations from "../public/img/hero/pattern-illustrations.svg";
import Motiongraphic from "../public/img/hero/pattern-motion-graphics.svg";

const Hero = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="w-2/3 2xl:w-5/12 mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">Design solutions made&nbsp;easy</h1>
        <p className="text-slate-500 text-base font-semibold">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>

      <div className="mt-20 2xl:mx-48">
        <div className="flex justify-center h-[22.5rem]">
          <div className="mx-3 w-1/3">
            <div className="bg-graphic p-5 rounded-lg h-full relative">
              <div className="absolute right-5">
                <Image src={Graphic} />
              </div>
              <h1 className="text-white absolute bottom-5 text-2xl font-semibold">Graphic Design</h1>
            </div>
          </div>

          <div className="mx-3 w-1/3">
            <div className="flex">
              <div className="bg-uiux p-5 mr-3 rounded-lg w-1/2 h-[10.5rem] relative">
                <div className="absolute right-5">
                  <Image src={UIUX} />
                </div>
                <h1 className="text-white absolute bottom-5 text-2xl font-semibold">UI/UX</h1>
              </div>

              <div className="bg-apps p-5 ml-3 rounded-lg w-1/2 h-[10.5rem] relative">
                <div className="absolute right-5">
                  <Image src={Apps} />
                </div>
                <h1 className="text-white absolute bottom-5 text-2xl font-semibold">Apps</h1>
              </div>
            </div>

            <div className="bg-illus p-5 mt-6 rounded-lg h-[10.5rem] relative">
              <div className="absolute right-5">
                <Image src={Illustrations} />
              </div>
              <h1 className="text-white absolute bottom-5 text-2xl font-semibold">Illustrations</h1>
            </div>
          </div>

          <div className="mx-3 w-1/3">
            <div className="bg-photo p-5 rounded-lg h-[10.5rem] relative">
              <div className="absolute right-5">
                <Image src={Photography} />
              </div>
              <h1 className="text-white absolute bottom-5 text-2xl font-semibold">Photography</h1>
            </div>
            <div className="bg-motion p-5 mt-6 rounded-lg h-[10.5rem] relative">
              <div className="absolute right-5">
                <Image src={Motiongraphic} />
              </div>
              <h1 className="text-white absolute bottom-5 text-2xl font-semibold">Motion Graphic</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
