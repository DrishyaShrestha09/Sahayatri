import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const DonatePage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationAmount: "",
    campaignId: id, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Thank you ${formData.name} for saving a cause. We’ll reach out to you soon for payment information.`);

    navigate("/");
    
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-[#F5F5F5] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-6">Join Us in Making a Difference</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Hidden input for campaign ID */}
          <input type="hidden" name="campaignId" value={formData.campaignId} />

          <div>
            <label htmlFor="name" className="block">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="donationAmount" className="block">Donation Amount</label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white hover:bg-blue-700 p-2 w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;
