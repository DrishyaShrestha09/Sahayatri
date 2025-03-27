import { useState } from "react";
import CampaignCard from "../campaigns/CampaignCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { useFetchAllCampaignsQuery } from "../../redux/features/campaigns/campaignsApi";

// creating an array for dropdown selection
const categories = [
  "Fundraising for",
  "Medical",
  "Education",
  "Charity",
  "Startups",
  "Research",
];

const Featured = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fundraising for");

  const { data: campaigns = [] } = useFetchAllCampaignsQuery();

  // Use campaigns instead of fundData
  const filteredData =
    selectedCategory === "Fundraising for"
      ? campaigns
      : campaigns.filter(
          (campaign) => campaign.category === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Together We <span className="text-[#008080] font-semibold">Make Dreams Happen</span> </h2>
      <h2 className="text-3xl font-semibold mt-10">Featured Campaigns</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none mt-5"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {/* Displaying filtered data */}
        {filteredData.length > 0 &&
          filteredData.map((campaign, index) => (
            <SwiperSlide key={index}>
              <CampaignCard campaign={campaign} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Featured;
