import React from "react";
import logo from "../assets/images/logo_nobg.webp";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191970] text-white py-8 pt-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-10">
          {/* Logo Section */}
          <div className="mb-6 w-full md:w-[50%]">
            <img src={logo} alt="" className="w-[250px] h-auto mb-6" />
            <p className="mt-2 text-[#ffffffb2] w-[75%] text-[18px] leading-8 mb-8 max-md:w-[100%]">
              We’re passionate about helping businesses grow with tailored
              digital solutions driving success, boosting engagement, and
              building your online presence.
            </p>
            <div className="flex gap-5">
              <ImFacebook className="text-[25px]" />
              <FaInstagram className="text-[25px]" />
              <FaLinkedinIn className="text-[25px]" />
              <FaWhatsapp className="text-[25px]" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 w-full md:w-[25%] ">
            <h3 className="text-lg font-semibold text-[26px] mb-6">Company</h3>
            <ul className="mt-4 space-y-2 text-[20px] leading-10">
              <li className="text-[#ffffffb2] hover:text-white">Home</li>
              <li className="text-[#ffffffb2] hover:text-white">About Us</li>
              <li className="text-[#ffffffb2] hover:text-white">Services</li>
              <li className="text-[#ffffffb2] hover:text-white">Blog</li>
            </ul>
          </div>

          <div className="mb-6 w-full md:w-[25%] ">
            <h3 className="text-lg font-semibold text-[26px] mb-6">Support</h3>
            <ul className="mt-4 space-y-2 text-[20px] leading-10">
              <li className="text-[#ffffffb2] hover:text-white">Contact Us</li>
              <li className="text-[#ffffffb2] hover:text-white">Privacy Policy</li>
              <li className="text-[#ffffffb2] hover:text-white">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-300 text-xl">
            &copy; 2024 YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
