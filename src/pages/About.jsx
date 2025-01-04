import team from "../assets/images/Home-page/team.jpeg";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      {/* Who-we-are Section Start here */}

      <section className="p-5 flex mt-32 ml-4 mb-10 max-lg:block max-lg:ml-0 max-lg:p-0 max-lg:justify-center">
        <div className=" w-[50%] mr-20 max-lg:w-auto max-lg:mb-[30px] max-lg:pl-3 max-lg:flex max-lg:justify-center max-lg:mr-6">
          <img
            src={team}
            alt=""
            className="w-[100%] mt-5 ml-4 rounded-[20px] z-0 max-lg:mt-9"
          />
        </div>
        <div className="w-[50%] ml-6 max-lg:w-[100%] max-lg:ml-0 max-lg:p-3">
          <div>
            <h3 className="text-[22px] text-[#ffc422] font-semibold">
              WHO WE ARE?
            </h3>
            <h1 className="text-[50px] font-semibold mb-4 mt-2 leading-[4rem] max-lg:text-[40px] max-lg:leading-[3rem]">
              Hey, We're A Team Of Creators
            </h1>
            <p className="leading-8 w-[95%] text-[18px] max-lg:w-[100%] max-lg:text-[16px]">
              At T SOFT TECH Company, we’re a dynamic team of creators who
              breathe life into technology. Passionate about innovation, we
              design and develop tailored software and digital solutions that
              empower businesses to flourish in the ever-evolving digital
              landscape. With a focus on collaboration and creativity, we
              transform ideas into impactful realities, ensuring that our
              clients not only keep up but stand out. Let’s build something
              extraordinary together!
            </p>
          </div>
          <div className="flex gap-10 mt-5 justify-between w-[95%] max-lg:w-[100%]">
            <div>
              <h1 className="text-[40px] font-semibold max-md:text-[40px]">
                50+
              </h1>
              <p className="text-[18px]">Employees</p>
            </div>
            <div>
              <h1 className="text-[40px] font-semibold max-md:text-[40px]">
                378+
              </h1>
              <p className="text-[18px]">Completed Projects</p>
            </div>
            <div>
              <h1 className="text-[40px] font-semibold max-md:text-[40px]">
                326+
              </h1>
              <p className="text-[18px]">Trusted Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-14 mb-12 max-md:mx-5">
        <h2 className="border w-[140px] p-2 pl-3 text-[20px] rounded-[12px] tracking-widest leading-7 bg-[#ecf1f1] text-[#191970] font-semibold">
          ABOUT US{" "}
        </h2>
        <h1 className="mt-6 text-[30px] max-md:text-[25px] font-semibold text-gray-600 mb-10">
          At T SOFT TECH, we specialize in digital marketing and website design,
          crafting solutions that empower businesses to stand out, engage, and
          grow in the digital world.
        </h1>
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-1/2 pr-8 max-md:w-full max-md:pr-0">
            <h1 className="text-[35px] font-semibold mb-5">Our Mission</h1>
            <p className="text-[18px] leading-8">
              Our mission is to elevate our clients’ online presence by
              delivering innovative, results-driven digital solutions that boost
              visibility, drive traffic, and create impactful connections with
              their audiences.
            </p>
          </div>
          <div className="flex flex-col w-1/2 max-md:w-full">
            <h1 className="text-[35px] font-semibold mb-5">Our Vision</h1>
            <p className="text-[18px] leading-8">
              Our vision is to be a leading force in digital transformation,
              enabling businesses of all sizes to achieve sustainable growth
              through cutting-edge digital strategies, effective website design,
              and personalized customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Who-we-are Section End here */}
    </main>
  );
}
export default About;
