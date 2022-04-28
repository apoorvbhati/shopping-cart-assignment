import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "nuka-carousel";

import { getbanner } from "../../redux/banner/actionCreator";

import "./banner.styles.scss";

const Banner = () => {
    const bannerData = useSelector((state) => state.getBanDetail.banners);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getbanner());
    }, [dispatch]);

    return (
        <div className="banner-container">
        <Carousel>
            {bannerData.map((banner) => (
            <div key={banner.id} className="carousel_img">
                <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
            </div>
            ))}
        </Carousel>
        </div>
  );
};

export default Banner;
