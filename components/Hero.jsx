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
        <p className="text-slate-500 font-medium">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>

      <div className="flex justify-center mt-20">
        <div className="bg-graphic p-5 mx-3">
          <Image src={Graphic} />
          <h1 className="text-white">Graphic Design</h1>
        </div>

        <div className="mx-3">
          <div className="flex">
            <div className="bg-uiux p-5 mr-3">
              <Image src={UIUX} />
              <h1 className="text-white">UI/UX</h1>
            </div>

            <div className="bg-apps p-5 ml-3">
              <Image src={Apps} />
              <h1 className="text-white">Apps</h1>
            </div>
          </div>

          <div className="bg-illus p-5 mt-6">
            <Image src={Illustrations} />
            <h1 className="text-white">Illustrations</h1>
          </div>
        </div>

        <div className="mx-3">
          <div className="bg-photo p-5">
            <Image src={Photography} />
            <h1 className="text-white">Photography</h1>
          </div>
          <div className="bg-motion p-5 mt-6">
            <Image src={Motiongraphic} />
            <h1 className="text-white">Motion Graphic</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
