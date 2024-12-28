import React from "react";
import metabg from "../../assets/images/meta-ads/hero/metabg.png";
import meta from "../../assets/images/meta-ads/hero/meta.png";
import lead from "../../assets/images/meta-ads/lead.webp";
import trends from "../../assets/images/meta-ads/trends.webp";
import partner from "../../assets/images/meta-ads/partner.webp";
import dedicated from "../../assets/images/meta-ads/dedicated.webp";
import { workItems, cards, progressItems } from "../../components/MetaAdsData";
import { Link } from "react-router-dom";

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

      {/* Who-we-are Section Start Here */}

      <section className="partners flex flex-wrap items-center bg-black text-white py-10 px-5 mb-8 max-lg:flex-col-reverse">
        {/* Text Content */}
        <div className="text-content flex-1 mr-8 ml-8 mt-5 w-[55%] max-lg:w-[100%] max-lg:mx-2">
          <h2 className="text-orange-500 uppercase mb-2 text-2xl">
            Who We Are
          </h2>
          <h1 className="text-[2.9rem] font-semibold leading-tight mb-8 w-[100%]">
            Your Trusted Partner in Digital Transformation
          </h1>
          <p className="text-[1.2rem] mb-8 w-[95%]">
            We're here to guide you through the ever-changing digital landscape,
            helping you achieve unparalleled growth and success.
          </p>

          <div className=" flex flex-wrap w-[95%] max-lg:flex-col max-lg:w-[100%]">
            {/* Features */}
            <div className="features flex flex-col gap-5 mb-5 w-[50%] max-lg:w-[100%]">
              <div className="feature flex items-center gap-4 mb-5">
                <img
                  src={lead}
                  alt="Industry Insights Icon"
                  className="w-20 h-20 mr-1"
                />
                <p className="text-2xl font-semibold mr-5">
                  Industry Insights & Trends
                </p>
              </div>
              <div className="feature flex items-center gap-4">
                <img src={trends} alt="Focus Icon" className="w-20 h-20 mr-2" />
                <p className="text-2xl font-semibold mr-5">
                  Focus on Core Business Activities
                </p>
              </div>
            </div>

            {/* Details */}
            <ul className="details list-none pl-0 space-y-4 w-[50%] max-lg:w-[100%]">
              {[
                "Detailed Market & Category Insight",
                "People insight to reach the right audience",
                "Strategic media planning & growth strategy",
                "Robust execution methodology",
                "Detailed insight & reporting",
              ].map((detail, index) => (
                <li key={index} className="flex text-lg w-[88%] leading-6 ml-5">
                  <span className="text-orange-500 text-2xl mr-2">↗</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Content */}
        <div className="image-content flex-1 w-[45%] mr-4 max-lg:w-[100%] ">
          <img
            src={partner}
            alt="Team Presentation"
            className="w-full rounded-xl "
          />
        </div>
      </section>

      {/* Who-we-are Section End Here */}

      {/* Cards Section Start Here */}

      <section className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-white rounded-lg shadow-lg border p-5 text-center"
          >
            <div className="icon text-3xl mb-3 text-red-500">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </section>

      {/* Cards Section End Here */}

      {/* Commitment Section Start Here */}

      <section className="commitment flex flex-col lg:flex-row justify-between items-start bg-black text-white px-10 py-12 my-8">
        {/* Left Section */}
        <div className="left-section flex-1 lg:pr-10">
          <h4 className="text-[#fd9e1c] font-semibold text-2xl uppercase mb-3 mt-5">
            Why Choose Us
          </h4>
          <h1 className="text-5xl maxlg:text-5xl font-semibold mb-7 leading-tight">
            Commitment, Quality, & Results
          </h1>
          <p className="text-xl font-semibold mb-4">
            We’re passionate about driving your business performance through
            smart strategies.
          </p>
          <p className="text-xl max-lg:mb-10">
            "Using data to create personalized, seamless experiences that lead
            to meaningful business growth."
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section flex-1 mt-12 max-lg:mt-0 max-lg:w-[100%]">
          {progressItems.map((item, index) => (
            <div key={index} className="progress-item mb-8">
              <p className="text-base mb-2 ">{item.text}</p>
              <div className="flex items-center">
                <div className="progress-bar w-full bg-white h-1 rounded overflow-hidden">
                  <div
                    className="progress bg-[#fd9e1c] h-full rounded-l"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="percentage text-sm ml-2">
                  {item.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section End Here */}

      {/* work section start here */}

      <section className="work text-center py-10 px-5">
        <h1 className="text-5xl font-semibold text-blue-500 mb-7">
          We work for
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Do you have a website in mind? Then, we're here for you! We work
          around the clock to transform your ideas into reality.
        </p>
        <div className="grid grid-cols-6 gap-5 justify-items-center max-md:grid-cols-2">
          {workItems.map((item, index) => (
            <div key={index} className="text-center mb-6">
              <img
                src={item.src}
                alt={item.alt}
                className="w-36 h-36 mb-5 rounded-lg"
              />
              <p className="text-sm font-bold text-gray-800">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* work section end here */}

      <section className="dedicated-team flex flex-col items-center justify-around p-5 gap-8 max-w-7xl mx-auto mb-12 w-[80%] max-lg:w-[100%] max-lg:p-5">
        <h1 className="text-5xl font-semibold text-center mb-6">
          Hire us as your dedicated team
        </h1>
        <div className="whole-content flex flex-col md:flex-row items-center max-lg:block max-lg:m-auto">
          <div className="team-image mb-5 md:mb-0 md:mr-10 w-[45%] max-lg:w-[100%] ">
            <img
              src={dedicated}
              alt="Team working"
              className="w-auto rounded-lg shadow-md max-lg:mb-8"
            />
          </div>
          <div className="team-content max-w-2xl w-[55%] max-lg:w-[100%]">
            <p className="text-[2rem] text-blue-600 mb-6 leading-10">
              We'll deploy a skilled team to build your product.
            </p>
            <ul className="list-none mb-5">
              <li className="text-xl mb-3 flex items-start">
                <span>•</span>
                <span className="ml-2">Time-centric pricing.</span>
              </li>
              <li className="text-xl mb-6 flex items-start">
                <span>•</span>
                <span className="ml-2">
                  Works best for freelancers, business consultants, and agencies
                  with already set processes.
                </span>
              </li>
            </ul>
            <Link to="about">
              <button className="know-more-btn bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">
                Know More →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default MetaAds;
