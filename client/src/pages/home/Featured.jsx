import { useEffect, useState } from "react";
import CampaignCard from "../campaigns/CampaignCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// creating an array for dropdown selection
const categories = [
  "Fundraising for",
  "Medical",
  "Education",
  "Charity",
  "Startups",
  "Research",
];

const Featured = ({ fund }) => {
  const [fundData, setFundData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Fundraising for");

  useEffect(() => {
    fetch("fundData.json")
      .then((res) => res.json())
      .then((data) => setFundData(data));
  }, []);

  const filteredData =
    selectedCategory === "Fundraising for"
      ? fundData
      : fundData.filter(
          (funds) => funds.category === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Featured Campaigns</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none mt-2"
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
          delay: 2500,
          disableOnInteraction: false,
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
          filteredData.map((fund, index) => (
            <SwiperSlide key={index}>
              <CampaignCard fund={fund} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Featured;
