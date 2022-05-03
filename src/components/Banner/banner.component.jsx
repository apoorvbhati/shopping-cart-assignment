import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "nuka-carousel";

import { fetchBannerDataStart } from "../../redux/Banners/banners.actions";

import "./banner.styles.scss";

const Banner = () => {
  const dispatch = useDispatch();

  const bannerList = useSelector((state) => {
    return state.banners.bannerData;
  });

  useEffect(() => {
    dispatch(fetchBannerDataStart());
  }, []);

  return (
    <div className="banner-container">
      <Carousel>
        {bannerList.map((banner) => (
          <div key={banner.id} className="carousel_img">
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
