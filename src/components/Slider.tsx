'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import landmarks from '@/mockdata/items.json';

const Slider = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Famous Landmarks</h2>
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative pb-12"
        >
          {landmarks.map((landmark) => (
            <SwiperSlide key={landmark.id}>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <img
                  src={landmark.image}
                  alt={landmark.name}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{landmark.name}</h3>
                <p className="text-gray-600 mb-2">{landmark.location}</p>
                <p className="text-gray-600">{landmark.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination absolute -bottom-10 left-0 w-full flex justify-center z-10"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
