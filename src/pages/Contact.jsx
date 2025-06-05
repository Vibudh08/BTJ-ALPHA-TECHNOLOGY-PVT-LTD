import { MapPin, PhoneCall, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

// FAQ Data
const faqData = [
  {
    section: 1,
    items: [
      {
        question: "What is SEO and why is it important?",
        answer:
          "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. It increases visibility, drives organic traffic, and helps build credibility for your brand.",
      },
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy. Generally, noticeable improvements can be seen within 3 to 6 months depending on competition, keyword difficulty, and website authority.",
      },
      {
        question: "What services are included in SMM?",
        answer: (
          <>
            <p>Our Social Media Marketing (SMM) services include:</p>
            <ul className="list-disc list-inside">
              <li>Content creation and scheduling</li>
              <li>Paid ad campaigns (Facebook, Instagram, etc.)</li>
              <li>Audience engagement and growth</li>
              <li>Performance tracking and analytics</li>
            </ul>
          </>
        ),
      },
      {
        question: "Can you develop custom websites?",
        answer:
          "Yes, we offer fully custom website development services tailored to your business goals. We build responsive, fast, and SEO-friendly websites using modern technologies.",
      },
      {
        question: "Do you offer eCommerce website development?",
        answer:
          "Absolutely! We specialize in building feature-rich eCommerce websites with secure payment gateways, inventory management, user-friendly dashboards, and more.",
      },
      {
        question: "What technologies do you use for website development?",
        answer:
          "We use technologies such as React, Next.js, Laravel, WordPress, Tailwind CSS, and Node.js, depending on the requirements and scalability needs of the project.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, all websites we develop are fully responsive, meaning they will work seamlessly on mobile devices, tablets, and desktops.",
      },
      {
        question: "Do you offer website maintenance services?",
        answer:
          "Yes, we provide ongoing website maintenance, including security updates, backups, performance optimization, and content updates.",
      },
      {
        question: "How do I get started with your services?",
        answer: (
          <p>
            Simply{" "}
            <a
              href="mailto:support@admirer.in"
              className="text-red-500 underline"
            >
              contact us
            </a>{" "}
            or visit our office to discuss your requirements. We'll guide you
            through the process and recommend the best solutions for your goals.
          </p>
        ),
      },
    ],
  },
];

const Contact = () => {
  const [openIndexes, setOpenIndexes] = useState({});
  const [formData, setFormData] = useState({
    company_name: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  useEffect(() => {
    setOpenIndexes({ "0-0": true });
  }, []);

  const toggleAccordion = (section, index) => {
    const key = `${section}-${index}`;
    setOpenIndexes((prev) => {
      const isAlreadyOpen = prev[key];
      return { [key]: !isAlreadyOpen };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API submission logic here
  };

  return (
    <>
      <div className="text-center px-4 py-10 pt-28 max-md:pt-20 bg-white">
        <h2 className="text-4xl max-md:text-2xl mt-5 mb-5 font-bold">
          Help & Contact
        </h2>

        <div className="bg-[#fcfcfc] mt-8 max-md:mt-3 py-10 rounded-lg shadow-sm max-w-5xl mx-auto">
          <h3 className="text-xl max-md:text-lg font-semibold mb-12 max-md:mb-8">
            Have A Question
          </h3>

          <div className="flex max-md:block gap-8  !max-md:gap-8 w-[75%] max-md:w-[100%] m-auto justify-around px-4 max-md:px-2">
            {/* Chat with Us */}
            <a
              href="https://www.google.com/maps?q=B-26,+Sector+2,+Noida,+UP,+201301"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 self-center max-md:mb-8  hover:opacity-90 transition"
            >
              <MapPin
                className="w-16 max-md:w-10 h-16 max-md:h-10 text-orange-500 mb-5 max-md:mb-2"
                strokeWidth={0.8}
              />
              <p className="text-[#191970] text-xl max-md:text-sm font-semibold">
                Visit Us
              </p>
              <p className="text-base text-gray-700 text-center">
                B-26, Sector 2, Noida, UP, 201301
              </p>
            </a>

            <div className="block w-px bg-gray-300 h-36 max-md:hidden self-center" />

            {/* Call Us At */}
            <a
              href="tel:01204525483"
              className="flex flex-col items-center gap-2 self-center max-md:mb-6 hover:opacity-90 transition"
            >
              <PhoneCall
                className="w-16 max-md:w-10 h-16 max-md:h-10 text-orange-500 mb-5 max-md:mb-2"
                strokeWidth={0.8}
              />
              <p className="text-[#191970] text-xl max-md:text-sm font-semibold">
                Call Us At
              </p>
              <p className="text-base text-gray-700">0120-4525483</p>
            </a>

            <div className="block w-px bg-gray-300 h-36 max-md:hidden self-center" />

            {/* Write to Us */}
            <a
              href="mailto:info@btjalphatechnology.com"
              className="flex flex-col items-center gap-2 self-center max-md:mb-6 hover:opacity-90 transition"
            >
              <Mail
                className="w-16 max-md:w-10 h-16 max-md:h-10 text-orange-500 mb-5 max-md:mb-2"
                strokeWidth={0.8}
              />
              <p className="text-[#191970] text-xl max-md:text-sm font-semibold">
                Write to Us
              </p>
              <p className="text-base text-gray-700">
                info@btjalphatechnology.com
              </p>
            </a>
          </div>

          <p className="text-md tracking-wide leading-normal text-gray-600 mt-8 w-[78%] max-md:w-full m-auto px-6 max-md:px-1">
            We're available Monday to Friday, from 9:30 AM to 6:30 PM.
          </p>
        </div>
      </div>

      <section className="py-8 max-md:py-2 bg-white w-[85%] max-md:w-full m-auto">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="">
              <div className="rounded-xl overflow-hidden shadow-md ml-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4413487311463!2d77.31301771110925!3d28.586533686066467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458a95dc981%3A0x79dcd015356fde99!2sB-26%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1739595167478!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl max-md:text-center font-bold mb-4">
                Get in touch
              </h2>
              <p className="mb-6 text-gray-600 max-md:text-center">
                Our team would love to hear from you. Write your message to us!
              </p>
              <form className="space-y-4 ">
                <div className="flex space-x-4 text-black">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-1/2 p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-1/2 p-3 border rounded-lg"
                  />
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Enter 10-digit number"
                    className="w-1/2 p-3 border rounded-lg"
                  />
                  <select className="w-1/2 p-3 border rounded-lg text-gray-400">
                    <option>Select Service</option>
                    <option>Web Designing</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Digital Marketing</option>
                    <option>Bulk SMS</option>
                    <option>Bulk Database</option>
                  </select>
                </div>
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg h-32"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#fb9c24] text-black p-3 rounded-lg font-semibold flex items-center justify-center"
                >
                  Submit <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <h3 className="text-3xl max-md:text-lg text-center font-semibold mb-12 max-md:mb-8">
          Frequently Asked Questions (FAQs)
        </h3>
        <div className="w-[90%] max-md:w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            {faqData[0].items
              .slice(0, Math.ceil(faqData[0].items.length / 2) - 1)
              .map((item, index) => {
                const key = `0-${index}`;
                const isOpen = openIndexes[key];
                return (
                  <div
                    key={key}
                    className={`bg-white mb-4 rounded-md border ${
                      isOpen ? "border-[#191970]" : "border-gray-200"
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-6 pt-4 pb-3 font-medium text-left"
                      onClick={() => toggleAccordion(0, index)}
                    >
                      {item.question}
                      <span className="text-2xl">{isOpen ? "-" : "+"}</span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-in-out px-6 text-gray-700 leading-relaxed space-y-2 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 py-4 pt-0"
                          : "grid-rows-[0fr] opacity-0 py-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {typeof item.answer === "string" ? (
                          <p>{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right column */}
          <div>
            {faqData[0].items
              .slice(Math.ceil(faqData[0].items.length / 2) - 1)
              .map((item, index) => {
                const actualIndex =
                  index + Math.ceil(faqData[0].items.length / 2);
                const key = `0-${actualIndex}`;
                const isOpen = openIndexes[key];
                return (
                  <div
                    key={key}
                    className={`bg-white mb-4 rounded-md border ${
                      isOpen ? "border-[#191970]" : "border-gray-200"
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-6 pt-4 pb-3 font-medium text-left"
                      onClick={() => toggleAccordion(0, actualIndex)}
                    >
                      {item.question}
                      <span className="text-2xl">{isOpen ? "-" : "+"}</span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-in-out px-6 text-gray-700 leading-relaxed space-y-2 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 py-4 pt-0"
                          : "grid-rows-[0fr] opacity-0 py-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {typeof item.answer === "string" ? (
                          <p>{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
