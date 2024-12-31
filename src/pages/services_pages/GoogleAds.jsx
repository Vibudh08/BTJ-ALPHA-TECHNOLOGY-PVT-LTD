import { useState } from "react";
import n2 from "../../assets/images/google-ads/n2.svg";
import rect from "../../assets/images/google-ads/rect.webp";
import education from '../../assets/images/google-ads/icons/education.webp';
import food from '../../assets/images/google-ads/icons/food.webp';
import healthcare from '../../assets/images/google-ads/icons/healthcare.webp';
import hospitality from '../../assets/images/google-ads/icons/hospitality.webp';
import hotel from '../../assets/images/google-ads/icons/hotel.webp';
import real from '../../assets/images/google-ads/icons/real-estate.webp';
import retail from '../../assets/images/google-ads/icons/retail.webp';
import travel from '../../assets/images/google-ads/icons/travel.webp';

function GoogleAds() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionData = [
    {
      header: "For Lead Generation",
      body: "Google Ads are a powerful tool for generating high-quality leads. Search Ads work best for connecting with users actively searching for your services. You can also leverage YouTube Search Ads and Dynamic Search Ads for additional reach and engagement.",
    },
    {
      header: "For eCommerce Sites",
      body: "For eCommerce businesses, Shopping Ads (now part of Performance Max) are highly effective. These campaigns use Google’s smart bidding and automation to optimize your ads, helping you drive more sales with less effort.",
    },
    {
      header: "For Mobile App Promotion",
      body: "Have a mobile app on Android or iOS? Universal App Campaigns are your go-to solution. These ads help you boost app installations and increase user engagement. They are cost-effective and deliver measurable results.",
    },
    {
      header: "For YouTube Video Ads",
      body: "If growing your YouTube channel is a priority, Video Ads can help you increase views, build your subscriber base, and boost brand awareness. With multiple ad formats available, you can customize campaigns based on your goals, budget, and target audience.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-[#f7f0ff] to-[#ffffff]">
      {/* agency section start here */}

      <section className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16 py-12 max-w-screen-xl mx-auto pt-44 pb-28 ">
        {/* Content Section */}
        <div className="max-w-full  text-center lg:text-left w-[40%] max-lg:w-[90%] ">
          <h1 className="text-5xl max-lg:text-5xl font-bold leading-[3.6rem] mb-8 text-black ">
            The Google Ads Agency for{" "}
            <span className="text-purple-600">Predictable ROIs.</span>
          </h1>
          <p className="text-lg max-lg:text-lg mt-4 mb-8  lg:max-w-none mx-auto lg:mx-0">
            Build Google Ads campaigns that are exceptional! Boundary helps you
            craft strategies that outperform the competition and drive
            sustainable growth and scale💸
          </p>
          <button className="px-6 py-3 text-lg font-medium bg-gray-200 text-purple-600 rounded-md hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:-translate-y-1">
            See How We Run Ads
          </button>
        </div>

        {/* Form Section */}
        <div className="bg-black p-8 rounded-lg shadow-lg mt-8 lg:mt-0 max-w-full lg:max-w-[40%]">
          <h2 className="text-white text-4xl max-lg:text-4xl font-semibold mb-8 leading-[3.6rem]">
            Your Google Ads Success Starts Here
          </h2>
          <form className="flex flex-col mb-8">
            <input
              type="email"
              placeholder="Work Email"
              required
              className="mb-4 px-4 py-3 rounded-md border border-white text-black focus:outline-none "
            />
            <input
              type="text"
              placeholder="Name"
              required
              className="mb-4 px-4 py-3 rounded-md border border-white text-black focus:outline-none"
            />
            <select
              required
              className="mb-4 px-4 py-3 rounded-md border border-white text-gray-500 focus:outline-none"
            >
              <option value="" disabled selected>
                Pick your PPC challenge here
              </option>
              <option value="low-roi">Low ROI</option>
              <option value="high-cost">High Cost per Click</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="bg-black text-white border border-white px-6 py-3 rounded-md font-medium text-lg hover:bg-purple-700 transition duration-300  mt-8"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* agency section end here */}

      {/* search section start here */}

      <section className="flex justify-center items-center pt-8 pb-16">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center py-12 max-w-5xl w-full justify-around ">
          {/* Main Phone Section */}
          <div className="relative bg-gray-200 rounded-2xl shadow-md flex justify-center items-center w-72 h-[470px] mb-6 md:mb-0 md:mr-8">
            {/* Google Logo */}
            <div className="absolute top-4 text-center">
              <div className="flex justify-center space-x-1 mt-10">
                <h1 className="text-4xl font-bold text-blue-500">G</h1>
                <h1 className="text-4xl font-bold text-red-500">o</h1>
                <h1 className="text-4xl font-bold text-yellow-500">o</h1>
                <h1 className="text-4xl font-bold text-green-500">g</h1>
                <h1 className="text-4xl font-bold text-blue-500">l</h1>
                <h1 className="text-4xl font-bold text-red-500">e</h1>
              </div>
            </div>

            {/* Search Bar */}
            <div className="absolute top-16 w-4/5 bg-white rounded-full shadow-sm flex items-center justify-center h-10 mt-14 ">
              <p className="text-gray-500">Modern furniture</p>
              <i className="fa fa-microphone text-blue-500 ml-2"></i>
            </div>

            {/* Ad Section */}
            <div className="absolute top-36 bg-white rounded-lg p-4 w-4/5 shadow-md mt-12">
              <h3 className="text-gray-800 font-semibold text-lg">
                Modern Design & Co
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                The best modern furniture essentials for your home.
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Start with search
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Help drive sales, leads, or site traffic by getting your business
              in front of people who are actively searching Google for products
              or services you offer.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Explore Search Ads
            </a>
          </div>
        </div>
      </section>

      {/* search section end here */}

      {/* management section start here */}

      <section className="flex items-center justify-between p-10 bg-gradient-to-r from-blue-900 to-blue-600 text-white  max-lg:flex-col  max-lg:m-auto">
        {/* Left Image Column */}
        <div className="flex-1 text-center  ">
          <img
            src={n2}
            alt="Google Ads"
            className="h-auto rounded-md ml-14 max-lg:ml-0 max-lg:pr-16"
          />
        </div>

        {/* Right Content Column */}
        <div className="flex-1 pl-5">
          <h2 className="text-2xl mb-5 leading-snug">
            Your Google Ads management team will:
          </h2>
          <div className="flex justify-between gap-5 max-lg:flex-col">
            {/* First Column of List */}
            <ul className="list-none space-y-2">
              <li>✅ Research your industry</li>
              <li>✅ Plan your campaign</li>
              <li>✅ Write your ad copy</li>
              <li>✅ Design your conversion-optimized landing pages</li>
            </ul>
            {/* Second Column of List */}
            <ul className="list-none space-y-2">
              <li>✅ Setup and launch your campaign</li>
              <li>✅ Proactively adjust your bids</li>
              <li>✅ Track your conversions</li>
              <li>✅ Report on your campaign performance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* management section end here */}

      {/* accordion section start here */}

      <section className="flex flex-wrap items-center justify-center gap-8 p-6 py-20">
        {/* Left Content */}
        <div className="flex-1 min-w-[300px] max-w-[600px]">
          <h2 className="text-5xl max-lg:text-3xl font-[650] text-gray-800 mb-8 leading-snug">
            What Type of Google Ads is Right for You?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Your goals matter! Use Search Ads to connect with people actively
            searching, Display Ads to boost brand visibility, Video Ads to
            captivate with engaging content, and Shopping Ads to showcase your
            products directly to shoppers.
          </p>
          <div className="bg-white border border-gray-300 rounded-md">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b last:border-none ">
                <div
                  className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-semibold text-gray-800 text-lg">
                    {item.header}
                  </span>
                  <span className="text-gray-500">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="px-4 py-3 bg-gray-50">
                    <p className="text-gray-600 text-sm">{item.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 min-w-[350px] max-w-[500px] text-center">
          <img
            src={rect}
            alt="Google Ads Services"
            className="w-full rounded-lg mt-4 ml-8 max-lg:ml-0"
          />
        </div>
      </section>

      {/* accordion section end here */}

      {/* industries section start here */}

      <section className="max-w-screen-xl mx-auto px-4 py-10 text-center mb-10">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-800 mb-12">
          Industries We Serve
        </h2>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 ">
          {[
            {
              img: real,
              title: "Real Estate",
            },
            {
              img: healthcare,
              title: "Healthcare",
            },
            {
              img: food,
              title: "Food and Beverages",
            },
            {
              img: hospitality,
              title: "Hospitality",
            },
            {
              img: retail,
              title: "Retail",
            },
            {
              img: travel,
              title: "Travel",
            },
            {
              img: education,
              title: "Education and Learning",
            },
            {
              img: hotel,
              title: "Hotel",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2"
            >
              <img
                src={industry.img}
                alt={industry.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-700">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col lg:flex-row  items-center gap-4 mx-8">
          <p className="text-lg lg:text-xl font-semibold flex-grow flex">
            Ads That Propel Your Growth to New Heights
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Call Now
            </button>
            <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
              Connect With Us
            </button>
          </div>
        </div>
      </section>

      {/* industries section end here */}
    </main>
  );
}
export default GoogleAds;
