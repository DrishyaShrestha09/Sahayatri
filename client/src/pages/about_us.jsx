import "../index.css";
import { Link } from "react-router-dom";
import peoples from "../assets/peoples.svg";
import mission from "../assets/mission.avif";
import banner from "../assets/banner1.jpg";

const About_us = () => {
  return (
    <div className="main bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img 
              src={banner} 
              alt="Community helping each other" 
              className="rounded-3xl shadow-xl transform hover:scale-[1.01] transition-all duration-300"
            />
          </div>

          <div className="md:w-1/2 w-full space-y-6">
            <h1 className="md:text-5xl text-4xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-[#008080]">Sahayatri!</span>
            </h1>
            <p className="text-2xl text-gray-700">
              Together we{" "}
              <span className="text-[#008080] font-semibold">make Dreams Happen</span>
            </p>
            <p className="text-lg text-gray-600">
              A platform where compassion meets action, connecting those who need help with those willing to give.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img 
              src={mission} 
              alt="Our mission" 
              className="rounded-3xl shadow-xl transform hover:scale-[1.01] transition-all duration-300"
            />
          </div>

          <div className="md:w-1/2 w-full space-y-6">
            <h1 className="md:text-4xl text-3xl font-bold text-gray-900">
              Our Mission
            </h1>
            <p className="text-lg text-gray-600">
              Our mission is simple: to empower individuals and organizations by
              providing a seamless and trustworthy platform to raise funds. We
              believe in the power of community and collaboration to make dreams a
              reality.
            </p>
            <p className="text-lg text-gray-600">
              We strive to bridge the gap between ambition and opportunity,
              ensuring that financial constraints never hold back innovation,
              compassion, or progress.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 w-full">
            <img 
              src={peoples} 
              alt="How Sahayatri works" 
              className="rounded-3xl shadow-xl transform hover:scale-[1.01] transition-all duration-300"
            />
          </div>

          <div className="md:w-1/2 w-full space-y-6">
            <h1 className="md:text-4xl text-3xl font-bold text-gray-900">
              How Sahayatri Works
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#008080] text-white rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">For Donors</h3>
                  <p className="text-gray-600">Browse campaigns, donate securely, and track your impact</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#008080] text-white rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">For Campaigners</h3>
                  <p className="text-gray-600">Create your campaign, share your story, and receive support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#008080] text-white rounded-full p-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">For Admins</h3>
                  <p className="text-gray-600">Manage campaigns with our powerful CRUD dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#008080] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join thousands of others who are transforming lives through Sahayatri</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Login to make a Difference  
            </Link>
            <Link 
              to="/campaigns" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition-colors duration-300"
            >
              Browse Campaigns
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! If you have any questions, need assistance, or
            just want to share your experience, feel free to reach out. We'd
            love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#008080] text-white rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">ridanstha09@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#008080] text-white rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600">+977 9804028236</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#008080] text-white rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">Social Media</h3>
                <p className="text-gray-600">@sahayatri</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              to="/Contact" 
              className="inline-block bg-[#008080] text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;