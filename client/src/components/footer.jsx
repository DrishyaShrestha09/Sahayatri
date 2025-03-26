import "../index.css";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main bg-white p-10 m-5 mt-10 rounded-[20px] h-120 w-415">
      <div className="header m-10">
        <h1 className="font-bold text-3xl">Sahayatri</h1>
        <p className="mt-5 text-xl">Give, Change, Inspire. </p>
      </div>
      {/* Creating button*/}
      <div className="btn bg-[#008080] m-5 flex gap-4 h-10 w-60 justify-center p-2 rounded-[20px] cursor-pointer hover:bg-[#006666]">
        <h1 className="text-white ">Donate Now</h1>
        <div className="icon bg-[#A8E067] rounded-[20px] ">
          <LuSendHorizontal className="m-1 " />
        </div>
      </div>
      {/* Creating copy-right*/}
      <div className="rights text-left  text-black text-xl px-4 py-2 mt-15">
        <p>&copy; 2025 Sahayatri. All rights reserved.</p>
      </div>
      {/* Creating main container for quick links*/}
      <div className="manage justify-end w-full flex flex-wrap gap-40 -mx-10">
        <div className="quick-links -my-65 ">
          <h3 className="font-semibold text-lg mb-2 ">Quick Links</h3>
          <ul className="space-y-5 mt-5">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/campaign" className="hover:underline">
                Campaign
              </Link>
            </li> */}
            <li>
              <Link to="/about_us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="social -my-65 px-10">
          <h3 className="font-semibold text-lg mb-2">Socials</h3>
          <ul className="space-y-5 mt-5">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter (X)</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
