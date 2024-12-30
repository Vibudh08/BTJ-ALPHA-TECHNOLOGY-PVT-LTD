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
    </main>
  );
}
export default GoogleAds