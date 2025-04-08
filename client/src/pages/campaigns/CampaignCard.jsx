/* eslint-disable react/prop-types */

import { CiCalendar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgurl";
import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="flex flex-wrap py-8 justify-center">
      {/* Card 1 */}
      <div className="cardCampaign flex w-full sm:w-[48%] lg:w-[30%] m-2 sm:m-4">
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white w-full">
          <Link to={`/campaigns/${campaign?._id}`}>
            <img
              src={`${getImgUrl(campaign?.coverImage)}`}
              alt="image"
              className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover"
            />
          </Link>
          <div className="p-4 sm:p-6 text-base sm:text-lg">
            <Link to={`/campaigns/${campaign?._id}`}>
              <h3 className="font-semi-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900 hover:text-blue-600">
                {campaign?.title}
              </h3>
            </Link>
            <p className="text-gray-700 leading-snug">
              {campaign?.description.length > 80
                ? `${campaign?.description.slice(0, 80)}...`
                : campaign?.description}
            </p>

            {/* Progress Bar */}
            <div className="progress-bar bg-gray-300 h-2 sm:h-3 rounded-full mt-4 sm:mt-5">
              <div
                className="bg-[#34C759] h-full rounded-full"
                style={{
                  width: `${
                    campaign?.fundRequired > 0
                      ? Math.min((campaign?.fundRaised / campaign?.fundRequired) * 100, 100) // math.min le width lai 100% vanda mathi jana didaina
                      : 0
                  }%`,
                }}
              ></div>
            </div>

            {/* Amount Collected */}
            <div className="amt_collected flex items-center gap-2 mt-3 sm:mt-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Rs. {campaign?.fundRaised}
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Raised of Rs. {campaign?.fundRequired}
              </p>
            </div>

            {/* Supporters Count */}
            <div className="supporterCount mt-2 sm:mt-3 flex gap-2 items-center font-semibold text-gray-800 text-sm sm:text-base">
              <FaHeart className="text-red-500 text-lg sm:text-xl" /> {campaign?.supportersCount || 0} Supporters
            </div>

            {/* Time Remaining */}
            <div className="time mt-2 flex items-center text-sm sm:text-base gap-2 text-gray-800">
              <CiCalendar className="text-lg sm:text-xl text-gray-600" /> 
              Created on: {campaign?.createdAt ? new Date(campaign?.createdAt).toLocaleDateString() : 'N/A'}
            </div>

            {/* Donate Button */}
            <div className="donateButton flex mt-4 sm:mt-5">
              <Link to={`/donate/${campaign?._id}`}>
                <button className="btn-primary text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-2.5">Fund a Cause</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;