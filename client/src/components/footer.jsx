import "../index.css";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main bg-white">
      <div className="header">
        <h1 className="font-bold text-2xl">Sahayatri</h1>
        <p>Give, Change, Inspire. </p>
      </div>
      <div className="btn bg-[#008080]">
        Donate Now
        <div className="icon bg-[#A8E067]">
          <LuSendHorizontal />
        </div>
      </div>
      <div className="rights text-left text-xs text-gray-600 px-4 py-2">
        <p>&copy; 2025 Sahayatri. All rights reserved.</p>
      </div>
      <div className="quick-links">
      <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/campaigns" className="hover:underline">Campaigns</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
      </div>
    </div>
  );
};

export default Footer;
