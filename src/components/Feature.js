import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination } from "swiper";
import { LOREM } from "./constants/index.js";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([EffectFade, Pagination]);

export default function Feature() {
  const slideData = [
    {
      title: "See personalized details of movie.",
      desc: LOREM,
      img_url:
        "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/green-book-GBK_Tsr1Sheet_RGB_3SM_rgb.jpg",
      bg: "bg-white",
    },
    {
      title: "See personalized details of movie.",
      desc: LOREM,
      img_url:
        "https://assets.fontsinuse.com/static/use-media-items/97/96759/full-1351x1800/5d940c87/parasite_poster.jpeg?resolution=0",
      bg: "bg-pink",
    },
    {
      title: "See personalized details of movie.",
      desc: LOREM,
      img_url: "https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg",
      bg: "bg-home",
    },
    {
      title: "See personalized details of movie.",
      desc: LOREM,
      img_url: "https://images-na.ssl-images-amazon.com/images/I/71c05lTE03L._AC_SL1024_.jpg",
      bg: "bg-pink",
    },
  ];
  return (
    <Swiper
      spaceBetween={0}
      pagination={{ clickable: true, dynamicBullets: true }}
      slidesPerView={1}
      className="flex flex-row font-bold"
      effect="fade"
    >
      {slideData.map((data, idx) => {
        return (
          <SwiperSlide className={data.bg} key={idx}>
            <div className="h-96 sm:h-48 mx-auto flex">
              <div className="h-full w-3/12 py-8 crop">
                <img src={data.img_url} class="-mb-10 img-feature" alt="" />
              </div>
              <div className="w-9/12 flex flex-col justify-center px-52">
                <h2 className="text-4xl">{data.title}</h2>
                <h5 className="text-xl font-normal">{data.desc}</h5>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
