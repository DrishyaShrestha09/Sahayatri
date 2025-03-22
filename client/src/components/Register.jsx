import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        setSuccessMessage("Account registered successfully!"); 

        // Clear input fields
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        setSuccessMessage(""); 
      });
  };

  return (
    <div className="flex justify-center align-middle mt-20">
      <div className="w-[350px] h-[550px] bg-white shadow-lg rounded-lg p-6">
        <p className="text-center text-2xl font-extrabold mb-4">
          Create account
        </p>
        <p className="text-xs text-center mb-4">Let's fund a cause</p>

        {successMessage && ( 
          <p className="text-green-600 text-center font-bold mb-4">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Name"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Email"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Password"
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-3 rounded-full bg-teal-700 text-white font-bold shadow-md hover:shadow-none">
            Create account
          </button>
        </form>

        <Link to="/login">
          <p className="text-xs text-gray-500 text-center">
            Already have an account?{" "}
            <span className="text-teal-700 font-extrabold underline cursor-pointer">
              Log in
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
