import "../index.css";
import { LuSendHorizontal } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="main bg-white">
      <div className="header">
        <h1>Sahayatri</h1>
        <p>Give, Change, Inspire </p>
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
    </div>
  );
};

export default Footer;
