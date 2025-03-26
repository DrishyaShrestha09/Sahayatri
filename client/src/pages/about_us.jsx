import "../index.css";
import { Link } from "react-router-dom";
import peoples from "../assets/peoples.svg"
import mission from "../assets/mission.avif"
import banner from "../assets/banner1.jpg";

const About_us = () => {
  return (
    <div className="main">
      <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
            <div className="images md:w-1/2 w-full flex items-center md:justify-end">
              <img src={banner} alt="" className="rounded-[40px]" />
            </div>
      
            <div className="texts md:w-1/2 w-full">
              <h1 className="md:text-5xl text-2xl font-medium mb-7">
                Welcome to Sahayatri!
              </h1>
              <p className="mb-10 text-2xl">
                Together we <span className="text-[#008080]">make Dreams Happen</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12">
            <div className="images md:w-1/2 w-full flex items-center md:justify-end">
              <img src={banner} alt="" className="rounded-[40px]" />
            </div>
      
            <div className="texts md:w-1/2 w-full">
              <h1 className="md:text-5xl text-2xl font-medium mb-7">
                Welcome to Sahayatri!
              </h1>
              <p className="mb-10 text-2xl">
                Together we <span className="text-[#008080]">make Dreams Happen</span>
              </p>
            </div>
          </div>
      <div className="work">
        
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl">
          How it works
        </h1>
        <p className="text-gray-600 mx-3 p-3"> We’ve made it easy for you to start, support, and succeed on Sahayatri :</p>
          <ul className="text-gray-600 m-2 p-3 flex flex-col gap-6">
            <li className=""> Create a Campaign – Share your story, set a funding goal, and start raising funds.</li>
            <li>Receive Support – Reach donors who believe in your vision.</li>
            <li> Make an Impact – Use the funds to bring your project or cause to life.</li>
          </ul>
      </div>
      <div className="choose">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl">
          With so many crowdfunding platforms available, what makes Sahayatri
          stand out?
        </h1>
        <p className="text-gray-600 m-3 p-3">
          User-Friendly Interface – A simple and intuitive platform for easy
          campaign creation.
        </p>
        <p className="text-gray-600 m-3 p-3">
          Transparent & Secure – Ensuring safety intransactions and campaign
          authenticity.
        </p>
        <p className="text-gray-600 m-3 p-3">
          Community-Driven Approach – Built for people who want to create change
          together.
        </p>
        <p className="text-gray-600 m-3 p-3">
          No Hidden Fees – We believe in fairness and transparency.
        </p>
      </div>
      <div className="get-in-touch">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl">
          Get In Touch
        </h1>
        <p className="text-gray-600 m-3 p-3">
          We’re here to help! If you have any questions, need assistance, or
          just want to share your experience, feel free to reach out. We&apos;d love
          to hear from you.
        </p>
        <p className="text-gray-600 m-3 p-3">Email: ridanstha09@gmail.com</p>
        <p className="text-gray-600 m-3 p-3">Phone: +977 9804028236</p>
        <p className="text-gray-600 m-3 p-3">Social Media: @sahayatri</p>
      </div>
      <div>
        <Link to="/Contact">
          <p className="inline-block m-3 p-3 text-black font-bold text-xl hover:underline cursor-pointer">
            Contact Us
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About_us;
