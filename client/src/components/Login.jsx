import { Link, useNavigate } from "react-router-dom";

import { useState } from "react"
import axios from "axios";
function Login () {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Login Successful") {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="flex justify-center align-middle mt-20 ">
      <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg p-6 ">
        <p className="text-center text-2xl font-extrabold mb-6">Welcome back</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-right text-gray-500 underline text-xs font-bold cursor-pointer hover:text-black">
            Forgot Password?
          </p>
          <button type="submit" className="p-3 rounded-full bg-teal-700 text-white font-bold shadow-md hover:shadow-none">
            Log in
          </button>
        </form>
        <Link to="/register">
          <p className="text-xs text-gray-500 text-center">
            Don't have an account?{" "}
            <span className="text-teal-700 font-extrabold underline cursor-pointer">
              Sign up
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
