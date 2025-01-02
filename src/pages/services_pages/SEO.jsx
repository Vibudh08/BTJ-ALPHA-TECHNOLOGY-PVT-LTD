function SEO() {
  return (
    <main>
      <section className="flex flex-wrap justify-between items-center p-10 bg-[#0A192F] text-white mt-20 pt-20 pb-28">
        {/* Content Section */}
        <div className="w-full lg:w-[45%] mb-8 lg:mb-0 px-4">
          <p className="text-lg lg:text-xl mb-6 ">
            Rated Excellent by 195+ Happy Customers
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold leading-relaxed mb-5">
            The Best SEO Services Agency in India
          </h1>
          <p className="text-base lg:text-lg leading-relaxed">
            Our team of 37 SEO experts is ready to help you increase your
            traffic and get your website to the top of Google. Let's work
            together to achieve your goals.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/5 bg-[#0A192F] p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Get a Free Website Audit From Our SEO Specialists
          </h2>
          <form action="submit_audit.php" method="post" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              pattern="^[0-9]{10}$"
              maxLength="10"
              title="Please enter a valid 10-digit phone number."
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="url"
              name="website_url"
              placeholder="Enter Your Website URL"
              required
              className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="needs"
              placeholder="Describe Your Needs"
              rows="3"
              required
              className="w-4/5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-4/5 h-12 bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Free Website Audit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
export default SEO