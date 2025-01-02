import hero from "../../assets/images/seo/Hero.webp";

function SEO() {
  return (
    <main>
      {/* Banner section start here */}

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

      {/* Banner section end here */}

      {/* Business section start here */}

      <section className="max-w-7xl mx-auto my-12 py-5 px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold mb-6">
            Why Does Your Business Need{" "}
            <span className="text-orange-500">SEO Services in Delhi</span>
          </h1>
          <p className="text-base text-gray-600 px-4">
            Whether you are a small business or a medium-sized firm, without SEO
            services, you cannot present yourself in front of your targeted
            audience. Some more reasons have been given here:
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-wrap gap-8 items-center max-lg:block">
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={hero}
              alt="SEO Analysis"
              className="max-w-4/5 rounded-lg max-lg:mb-8"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center">
            <ul className="space-y-4">
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>You need to be on the 1st page:</strong> According to
                  experts, 90% of people do not even go to the 2nd page. So, you
                  need to be on the first page if you want to improve your ROI.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>
                    Improve the online visibility of your business:
                  </strong>{" "}
                  By getting better online visibility, you can get recognized as
                  a reliable brand and generate high volumes of leads and sales.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Target the right audience:</strong> ‘Quality wins over
                  Quantity’. It is even more relevant when it comes to website
                  traffic. With our industry-focused SEO strategies, you can
                  touch the untapped market and convert them into lifetime
                  customers.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Raise user experience:</strong> SEO is more than using
                  the right keywords. To remain a loyal brand, you must provide
                  your users with enhanced experiences so that they can ask you
                  for more.
                </span>
              </li>
              <li className="flex items-start text-lg">
                <i className="fa fa-check-square text-orange-500 mr-3"></i>
                <span>
                  <strong>Affordable yet comprehensive marketing:</strong> When
                  compared to other traditional marketing methods, SEO is much
                  more affordable and effective at the same time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business section end here */}
    </main>
  );
}
export default SEO;
