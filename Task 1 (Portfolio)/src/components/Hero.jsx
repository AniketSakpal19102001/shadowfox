function Hero() {
  return (
    <>
      <div className="fade h-[90%] mx-4 sm:mx-16 flex justify-center items-center">
        <div className="sm:flex gap-2 w-full justify-around mx-4 sm:mx-16 flex-wrap-reverse">
          <div className=" flex justify-center items-center">
            <div className=" w-64 bg-white aspect-square overflow-hidden rounded-full">
              <img src="squarepfp.jpg" alt="" />
            </div>
          </div>
          <div className="flex py-4 gap-5 flex-col justify-start items-center sm:items-start order-last sm:order-first whitespace-nowrap">
            <div className="flex sm:block flex-col justify-center items-center">
              <p className=" text-6xl xl:text-9xl lg:text-8xl sm:text-7xl  pt-5">
                I'm Aniket
              </p>
              <p className=" text-2xl xl:text-3xl mt-1 sm:-4xl">
                Full Stack Developer
              </p>
            </div>
            <div className=" py-4 md:py-8 flex gap-4">
              <a
                href="#projects"
                className=" sm:text-xl rounded-full px-6 py-2 border border-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="sm:text-xl rounded-full px-6 py-2 text-black
              font-semibold bg-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
