import { useState } from "react";
import logo from "../assets/images/Home-page/logo.jpg";
import { FaAlignJustify } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState("show");
  const handleClick = () => {
    setShow((e) => (e === "show" ? "hidden" : "show"));
  };
  return (
    <>
      <main className=" w-[100%]">
        <div className="flex justify-between mb-2 mt-2">
          <img
            src={logo}
            className="w-[200px] object-cover ml-5 mt-1 max-lg:ml-0 max-lg:mt-0"
            alt=""
          />
          <div className="max-lg:relative max-lg:bg-black">
            <div
              className={`${show} w-full flex max-lg:flex-col max-lg:absolute  max-lg:mt-[375px] max-lg:top-1/2 max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:w-[250px] max-lg:bg-white max-lg:text-black z-50 max-lg:pb-10 max-lg:pl-5 max-lg:rounded-[12px] transition-all duration-300 ease-in delay-300`}
            >
              <ul className="flex mt-6 mr-40 text-lg gap-8 font-semibold max-lg:block transition-all duration-300 ease-in delay-300">
                <Link to="/">
                  <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                    Home
                  </li>
                </Link>
                <Link to="about">
                  <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                    About Us
                  </li>
                </Link>
                <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                  Services
                </li>
                <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                  Bulk SMS
                </li>
                <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                  Blog
                </li>
                <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                  Portfolio
                </li>
                <Link to="contact">
                  <li className="max-lg:text-xl max-lg:w-40 max-lg:text-[30px] max-lg:p-4 max-lg:mb-4 hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-[#fb9c24]">
                    Contact
                  </li>
                </Link>
              </ul>
              <Link to="contact">
                <button className="w-[170px] mr-7 font-bold mt-3 border-solid border-orange-500 border pl-5 pr-9 h-14 rounded-2xl text-1xl">
                  Get In Touch
                  <span className="absolute mt-1 ml-2 text-xl">
                    <FiArrowRightCircle />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <span className="lg:hidden text-3xl mr-5 mt-5 z-[1000] ">
            <FaAlignJustify onClick={handleClick} />
          </span>
        </div>
      </main>
    </>
  );
}
export default Header;
