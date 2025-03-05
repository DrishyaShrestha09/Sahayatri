import Footer from "../components/Footer";
import "../index.css";
const About_us = () => {
  return (
    <div className="main">
      <div className="into ">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl">Introduction to Sahayatri</h1>
        <p className="text-gray-600 m-3 p-3">
          Sahayatri is more than just a crowdfunding platform it's a movement
          that connects dreamers with believers. Whether it's for social causes,
          business ventures, or personal projects, we provide a transparent and
          secure space where ideas come to life through the power of collective
          support.
        </p>
      </div>
      <div className="mission">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl" >Our Mission</h1>
        <p className="text-gray-600 m-3 p-3" >
          Our mission is simple: to empower individuals and organizations by
          providing a seamless and trustworthy platform to raise funds. We
          believe in the power of community and collaboration to make dreams a
          reality. We strive to bridge the gap between ambition and opportunity,
          ensuring that financial constraints never hold back innovation,
          compassion, or progress.
        </p>
      </div>
      <div className="work">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl" >How it works</h1>
        <p className="text-gray-600 m-3 p-3" >
          We’ve made it easy for you to start, support, and succeed on
          Sahayatri:
          <ul>
            <li  >
              Create a Campaign – Share your story, set a funding goal, and
              start raising funds.
            </li>
            <li >Receive Support – Reach donors who believe in your vision.</li>
            <li >
              Make an Impact – Use the funds to bring your project or cause to
              life.
            </li>
          </ul>
        </p>
      </div>
      <div className="choose">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl" >
          With so many crowdfunding platforms available, what makes Sahayatri
          stand out?
        </h1>
        <p className="text-gray-600 m-3 p-3" >
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
        <p className="text-gray-600 m-3 p-3">No Hidden Fees – We believe in fairness and transparency.</p>
      </div>
      <div className="get-in-touch">
        <h1 className="m-3 p-3 flex text-black font-bold text-2xl" >Get In Touch</h1>
        <p className="text-gray-600 m-3 p-3" >
          We’re here to help! If you have any questions, need assistance, or
          just want to share your experience, feel free to reach out. We'd love
          to hear from you.
        </p>
        <p className="text-gray-600 m-3 p-3" >Email: ridanstha09@gmail.com</p>
        <p className="text-gray-600 m-3 p-3" >Phone: +977 9804028236</p>
        <p className="text-gray-600 m-3 p-3" >Social Media: @sahayatri</p>
      </div>
      <Footer/>
    </div>
  );
};

export default About_us;
