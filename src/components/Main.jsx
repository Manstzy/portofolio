import { FiGithub } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import "../index.css";

const Main = () => {
  return (
    <div className="bg-primary w-full h-screen font-madefor relative">
      <div className="flex px-40 pt-44 gap-20 space-x-28">
        <div className="flex flex-col gap-5 mt-[85px] space-y-2">
          <a
            href="https://www.instagram.com/nama-akun-anda"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoLogoInstagram size={22} />
          </a>
          <IoLogoLinkedin size={22} className="cursor-pointer" />
          <FiGithub size={22} className="cursor-pointer" />
        </div>
        <div>
          <div className="flex gap-4">
            <h1 className="text-[40px] font-Lobster">Muhammad Arif</h1>
            <img
              className="w-10 h-10 mt-3"
              src="../src/assets/hand.svg"
              alt=""
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="h-0.5 w-12 mt-2 bg-red-300 block"></span>
            <p className="font-poppins text-lg mt-2">
              Enthusiasm of Web Developer
            </p>
          </div>
          <p className="mt-3 font-poppins max-w-[500px] text-gray-500">
            hello, I am very interested in web development and want to explore
            it more deeply and more dedication for my work...
          </p>
          <button className="flex gap-1 items-center justify-center px-6 py-3 rounded-xl mt-6 ml-5 bg-rose-950 text-white font-semibold font-poppins cursor-pointer">
            Say Hello
            <img
              className="mt-1 filter invert"
              src="../src/assets/send.svg"
              alt=""
            />
          </button>
          <div className="flex items-center cursor-pointer">
            <img className="mt-32 " src="../src/assets/scroll.svg" alt="" />
            <p className="font-poppins mt-32 ml-2">scroll down</p>
            <FaArrowDown
              className="mt-32 ml-1"
              size={15}
            />
          </div>
        </div>
        <div className="">
          <img
            className=" w-72 h-60 mt-4 animate-profileAnimate"
            src="../src/assets/me kacamata.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

// shadow-[inset_10px_10px_10px_10px_rgb(267_145_189)]
