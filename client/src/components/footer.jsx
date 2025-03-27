import { Link } from "react-router-dom";
import { LuSendHorizontal } from "react-icons/lu";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="max-w-[90rem] mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col md:flex-col justify-start gap-6">
            <h1 className="font-bold text-3xl text-gray-900">Sahayatri</h1>
            <p className="text-xl text-gray-600">
              Give, Change, Inspire. Together we make dreams happen.
            </p>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="bg-[#008080] hover:bg-[#006666] transition-colors duration-300 text-white flex items-center gap-2 w-fit px-6 py-3 rounded-full cursor-pointer"
            >
              <span>Donate Now</span>
              <div className="bg-[#A8E067] rounded-full p-1">
                <LuSendHorizontal className="text-black" />
              </div>
            </Link>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-[#008080] hover:underline transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/about_us"
                    className="text-gray-600 hover:text-[#008080] hover:underline transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-[#008080] hover:underline transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-6">
                Connect With Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#008080] transition-colors duration-200"
                  >
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#008080] transition-colors duration-200"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#008080] transition-colors duration-200"
                  >
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-[#008080] transition-colors duration-200"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-6">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter for the latest campaigns and
                updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#008080] w-full"
                />
                <button className="bg-[#008080] text-white px-4 py-2 rounded-r-lg hover:bg-[#006666] transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Sahayatri. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-gray-600">
            <span>Made with</span>
            <FaHeart className="text-red-500" />
            <span>in Nepal</span>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#008080] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#008080] transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
