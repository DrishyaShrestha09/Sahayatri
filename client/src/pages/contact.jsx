import "../index.css";
import contact from "../assets/contact.svg";

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="w-full max-w-6xl px-8 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={contact} alt="Contact" className="w-72 md:w-96" />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to contact us, and we will get back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-400 p-3 w-full bg-transparent focus:border-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border-b border-gray-400 p-3 w-full bg-transparent focus:border-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border-b border-gray-400 p-3 w-full bg-transparent focus:border-blue-500 outline-none h-32"
            ></textarea>
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
