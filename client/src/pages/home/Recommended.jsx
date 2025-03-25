import {  Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CampaignCard from "../campaigns/CampaignCard";

// Import Swiper React components
import { Swiper } from "swiper/react";

// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { useFetchAllCampaignsQuery } from "../../redux/features/campaigns/campaignsApi";

const Recommended = () => {

  const { data: campaigns = [] } = useFetchAllCampaignsQuery();
    
  return (
    <div className="py-16">
        <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Displaying filtered data */}
        {
        campaigns.length > 0 && campaigns.slice(5, 10).map((campaign, index) => (
            <SwiperSlide key={index}>
              <CampaignCard campaign={campaign} />
            </SwiperSlide>
          ))}
      </Swiper>

    </div>
  )
}

export default Recommended
