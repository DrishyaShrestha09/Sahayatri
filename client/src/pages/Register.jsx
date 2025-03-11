import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center align-middle mt-20">
      <div className="w-[350px] h-[550px] bg-white shadow-lg rounded-lg p-6">
        <p className="text-center text-2xl font-extrabold mb-4">
          Create account
        </p>
        <p className="text-xs text-center mb-4">
          Let's get started with your 30 days free trial
        </p>
        <form className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Name"
          />
          <input
            type="email"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Email"
          />
          <input
            type="password"
            className="rounded-full border border-gray-400 outline-none p-3"
            placeholder="Password"
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
};

export default Register;
