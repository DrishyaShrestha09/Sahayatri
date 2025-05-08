import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import cryptoJs from "crypto-js";

const DonatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationAmount: "0",
    transaction_uuid: uuidv4(),
    campaignId: id,
    product_code: "EPAYTEST",
    success_url: "http://localhost:5173/payment-success",
    failure_url: "http://localhost:5173/payment-failure",
    signed_field_names: "total_amount,transaction_uuid,product_code",
    signature: "",
    secret: "8gBm/:&EnhH.1/q",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateSignature = (data) => {
    const fields = formData.signed_field_names.split(",");
    const signatureString = fields
      .map((field) => `${field}=${data[field]}`)
      .join(",");
    const hash = cryptoJs.HmacSHA256(signatureString, formData.secret);
    return cryptoJs.enc.Base64.stringify(hash);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/update-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campaignId: formData.campaignId,
          donationAmount: formData.donationAmount,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Generate signature and submit to eSewa
      const esewaForm = document.createElement("form");
      esewaForm.method = "POST";
      esewaForm.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

      const esewaData = {
        total_amount: formData.donationAmount,
        transaction_uuid: formData.transaction_uuid,
        product_code: formData.product_code,
      };

      const signature = generateSignature(esewaData);

      const fields = {
        amount: formData.donationAmount,
        tax_amount: "0",
        total_amount: formData.donationAmount,
        transaction_uuid: formData.transaction_uuid,
        product_code: formData.product_code,
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: formData.success_url,
        failure_url: formData.failure_url,
        signed_field_names: formData.signed_field_names,
        signature: signature,
      };

      for (const key in fields) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = fields[key];
        esewaForm.appendChild(input);
      }

      document.body.appendChild(esewaForm);
      esewaForm.submit();

      console.log("Donation Successful:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-[#F5F5F5] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-6">Join Us in Making a Difference</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
