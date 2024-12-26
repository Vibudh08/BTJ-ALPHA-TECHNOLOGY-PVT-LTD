import React from "react";
import metabg from "../../assets/images/meta-ads/hero/metabg.png";
import meta from "../../assets/images/meta-ads/hero/meta.png";
import lead from "../../assets/images/meta-ads/lead.webp";
import trends from "../../assets/images/meta-ads/trends.webp";
import partner from "../../assets/images/meta-ads/partner.webp";

function MetaAds() {
   const cards = [
     {
       icon: "🔍",
       title: "Meta Certified Experts",
       description:
         "Already have a Meta Ads account? We’ll dive deep into your current strategy and provide a detailed report, pinpointing areas where we can help you maximize your results on Facebook & Instagram.",
     },
     {
       icon: "💵",
       title: "Fair Pricing",
       description:
         "We believe in transparency with pricing. With our fixed fee model, you’ll know exactly what you’re paying for, based on your account performance or your specific goals.",
     },
     {
       icon: "🤝",
       title: "Flexible Agreements",
       description:
         "We offer flexibility in how we work together, starting with month-to-month options. Our goal is to exceed your expectations and build a lasting partnership with you.",
     },
     {
       icon: "📋",
       title: "Meta Ads Audit",
       description:
         "Our team is fully certified in Meta Ads, and we provide ongoing training to keep up with platform changes. We’re committed to ensuring your campaigns succeed with the latest insights and strategies.",
     },
     {
       icon: "👥",
       title: "2x Meta Certified Campaign Managers",
       description:
         "Every Meta Ads account we manage is supported by two certified experts. You’ll have dedicated access to our team, offering the support of a full-scale digital marketing department.",
     },
     {
       icon: "📈",
       title: "Detailed Reporting",
       description:
         "We believe in the power of clear reporting to track success. We provide regular updates on the performance of your Facebook campaigns, so you’re always informed about the progress of your account.",
     },
   ];
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
    </main>
  );
}
export default MetaAds;
