import { CiCalendar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgurl";
import { Link, useParams } from "react-router-dom";
import { useFetchCampaignByIDQuery } from "../../redux/features/campaigns/campaignsApi";

const SingleCampaign = () => {
  const { id } = useParams();
  const { data: campaign, isLoading, isError } = useFetchCampaignByIDQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching campaign data</div>;
  return (
    <div className="flex flex-col md:flex-row py-8 md:py-16 justify-between items-start gap-8 md:gap-12">
      {/* left */}
      <div className="images md:w-1/2 flex items-center md:justify-end shrink-0 md:ml-[-100px] lg:ml-[-200px]">
        <img
          src={`${getImgUrl(campaign?.coverImage)}`}
          alt="poor aman"
          className="w-full max-w-[580px] h-[534px] object-cover rounded-[20px] md:rounded-[40px]"
        />
      </div>

      {/* right */}
      <div className="flex-1 px-4 md:px-16 pr-4 max-h-[400px] md:max-h-none overflow-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {campaign?.title}
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-5">
          {campaign?.description}
        </p>

        {/* Progress Bar */}
        <div className="progress-bar bg-gray-300 h-3 rounded-full mt-5">
          <div
            className="bg-[#34C759] h-full rounded-full"
            style={{
              width: `${
                campaign?.fundRequired > 0
                  ? (campaign?.fundRaised / campaign?.fundRequired) * 100
                  : 0
              }%`,
            }}
          ></div>
        </div>

        {/* Amount Collected */}
        <div className="amt_collected flex items-center gap-2 mt-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Rs. {campaign?.fundRaised}
          </h1>
          <p className="text-base text-gray-600">
            Raised of Rs. {campaign?.fundRequired}
          </p>
        </div>

        {/* Supporters Count */}
        <div className="supporterCount mt-3 flex gap-2 items-center font-semibold text-gray-800">
          <FaHeart className="text-red-500 text-xl" />{" "}
          {campaign?.supportersCount || 0} Supporters
        </div>

        {/* Time Remaining */}
        <div className="time mt-2 flex items-center text-base gap-2 text-gray-800">
          <CiCalendar className="text-xl text-gray-600" />
          Created on:{" "}
          {campaign?.createdAt
            ? new Date(campaign?.createdAt).toLocaleDateString()
            : "N/A"}
        </div>

        {/* Donate Button */}
        <div className="donateButton flex mt-5">
          <Link to={`/donate/${campaign?._id}`}>
            <button className="btn-primary">Fund a Cause</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCampaign;
