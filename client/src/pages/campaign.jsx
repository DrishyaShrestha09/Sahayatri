import "../index.css";
import aman from "../assets/aman.jpg";
import { FaHeart } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const Campaign = () => {
  return (
    <div>
      {/* making card component */}

      <div className="flex flex-wrap justify-center py-8">
        {/* Card 1 */}
        <div className="cardCampaign flex w-[30%] m-4">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button */}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cardCampaign flex w-[30%] m-4 ">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button */}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="cardCampaign flex w-[30%] m-4">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="cardCampaign flex w-[30%] m-4 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="cardCampaign flex w-[30%] m-4  mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="cardCampaign flex w-[30%] m-4 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 7 */}
        <div className="cardCampaign flex w-[30%] m-4 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 8 */}
        <div className="cardCampaign flex w-[30%] m-4 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 9 */}
        <div className="cardCampaign flex w-[30%] m-4 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <img
              src={aman}
              alt="poor aman"
              className="h-[300px] w-full object-cover"
            />
            <div className="p-6 text-lg">
              <h1 className="font-bold text-2xl mb-4 text-gray-900">
                Help Aman Chase His Dreams!
              </h1>
              <p className="text-gray-700 leading-snug">
                Meet Aman, a bright young boy whose love for learning is
                overshadowed by financial struggles. But with your support, we
                can keep his dreams alive!
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs.50,000</h1>
                <p className="text-base text-gray-600">Raised of Rs.70,000</p>
              </div>

              {/* Supporters Count */}
              <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
                <FaHeart className="text-red-500 text-xl" /> 200 Supporters
              </div>

              {/* Time Remaining */}
              <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
                <CiCalendar className="text-xl text-gray-600" /> 10 Days Left
              </div>

              {/* Donate Button*/}
              <div className="donateButton flex mt-5">
                <button className="rounded-full px-6 py-3 text-lg font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] transition duration-300 shadow-md hover:shadow-lg">
                  Fund a Cause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Campaign
