const Consultation = () => {
  return (
    <div className="container mx-auto mt-28 mb-20">
      <div className="flex justify-between 2xl:mx-48 p-16 bg-black rounded-lg items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-white mb-7">Book a call with me</h1>
          <p className="text-justify text-white text-base font-semibold">
            I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.
          </p>
        </div>
        <div className="w-1/4">
          <button className=" text-white text-lg font-semibold px-8 py-3 rounded-full bg-illus hover:bg-uiux transition duration-300">Free Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
