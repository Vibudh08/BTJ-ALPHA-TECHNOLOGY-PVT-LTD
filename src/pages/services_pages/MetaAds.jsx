import React from "react";
import metabg from "../../assets/images/meta-ads/hero/metabg.png";
import meta from "../../assets/images/meta-ads/hero/meta.png";

function MetaAds() {
  return (
    <main>
      {/* Banner Section Start Here */}

      <section className="relative agency flex max-lg:flex-col max-lg:justify-center  items-center w-full overflow-hidden shadow-lg bg-gradient-to-t from-black/50 to-black/50 bg-cover mt-[90px]  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${metabg})`,
          }}
        >
          {/* Dull Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Left Section */}
        <div className="relative left-section bg-transparent p-10 flex-1 text-white mt-4">
          <h1 className="text-6xl font-semibold mb-10">Meta Ads Agency</h1>
          <ul className="space-y-4 mb-8">
            {[
              "Get a Winning Facebook Ads Strategy",
              "Fair Pricing & Flexible Agreements",
              "Fully Measurable With Proven Results",
              "Find New Customers & Scale",
              "Increase Your Traffic, Leads & Sales",
              "Work With Certified Facebook Ads Specialists!",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-[1.4rem] leading-8"
              >
                <span className="text-orange-500 mr-3">●</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="tel:01245206456"
            className="call-button inline-block bg-[#0000ff] text-white py-3 px-5 rounded-3xl font-bold text-lg hover:bg-blue-800"
          >
            Call 01245 206456
          </a>

          <div className="certifications flex mt-8">
            <div className="certifications-div flex flex-col items-center justify-center bg-[#0000ff] rounded-full h-28 w-28 text-white mx-2">
              <div className="content-image flex items-center justify-center bg-white h-[50%] mt-[-20px] w-[110px] mb-2  rounded-t-full">
                <img
                  src={meta}
                  alt="Meta Certified"
                  className="h-12 w-[70px] mt-2"
                />
              </div>
              <p className="content-text text-center text-xs font-semibold">
                Media Buying Professional
              </p>
            </div>
            <div className="certifications-div flex flex-col items-center justify-center bg-[#0000ff] rounded-full h-28 w-28 text-white mx-2">
              <div className="content-image flex items-center justify-center bg-white h-[50%] mt-[-20px] w-[110px] mb-2  rounded-t-full">
                <img
                  src={meta}
                  alt="Meta Certified"
                  className="h-12 w-[70px] mt-2"
                />
              </div>
              <p className="content-text text-center text-xs font-semibold">
                Media Planning Professional
              </p>
            </div>
            <div className="certifications-div flex flex-col items-center justify-center bg-[#0000ff] rounded-full h-28 w-28 text-white mx-2">
              <div className="content-image flex items-center justify-center bg-white h-[50%] mt-[-20px] w-[110px] mb-2  rounded-t-full">
                <img
                  src={meta}
                  alt="Meta Certified"
                  className="h-12 w-[70px] mt-2"
                />
              </div>
              <p className="content-text text-center text-xs font-semibold">
                Digital Marketing Associate
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative right-section bg-gray-100 rounded-xl p-8 py-12 flex-1 max-w-[500px]  mr-10 mt-12 mb-16 max-lg:mx-2 ">
          <h2 className="text-2xl font-bold text-[#0000ff] mb-6">
            How can we help you?
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="What can we help you with?"
              required
              className="w-full p-3 border border-gray-300 rounded-md resize-none h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold text-lg rounded-md hover:bg-orange-600"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Banner Section End Here */}

      
    </main>
  );
}
export default MetaAds;
