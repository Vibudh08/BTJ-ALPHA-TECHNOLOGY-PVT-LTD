function GoogleAds() {
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
    </main>
  );
}
export default GoogleAds