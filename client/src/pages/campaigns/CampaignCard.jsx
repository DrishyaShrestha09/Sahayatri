/* eslint-disable react/prop-types */

import { CiCalendar } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { getImgUrl } from '../../utils/getImgurl';
import { Link } from 'react-router-dom';



const CampaignCard = ({campaign}) => {
  return (
    <div className="flex flex-wrap py-8 justify-center">
        {/* Card 1 */}
        <div className="cardCampaign flex w-[30%] m-4">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
            <Link to={`/campaigns/${campaign?._id}`}>
            <img
              src={`${getImgUrl(campaign?.coverImage)}`}
              alt="image"
              className="h-[300px] w-full object-cover"
              />
              </Link>
            <div className="p-6 text-lg">
              <Link to={`/campaigns/${campaign?._id}`}> <h3 className='font-semi-bold text-xl mb-4 text-gray-900 hover:text-blue-600'>
                {campaign?.title}
                </h3></Link>
              <p className="text-gray-700 leading-snug">
                {campaign?.description.length > 80 ? `${campaign?.description.slice(0, 80)}...` : campaign?.description}
              </p>

              {/* Progress Bar */}
              <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
                <div className="bg-[#34C759] w-[70%] h-full rounded-full"></div>
              </div>

              {/* Amount Collected */}
              <div className="amt_collected flex items-center gap-2 mt-4">
                <h1 className="text-2xl font-bold text-gray-900">Rs. {campaign?.fundRaised}</h1>
                <p className="text-base text-gray-600">Raised of Rs. {campaign?.fundRequired}</p>
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
                <Link to={`/donate/${campaign?._id}`}>
                  <button className="btn-primary">
                    Fund a Cause
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};


export default CampaignCard
