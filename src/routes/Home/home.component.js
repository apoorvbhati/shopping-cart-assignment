import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [carouselItems, setCarouselItems] = useState();
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };

    // const getCarouselItems = () => {
    //     axios.get('http://localhost:5000/banners')
    //     .then(res => setCarouselItems(res))
    //     .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     getCarouselItems();
    // }, [])

    console.log(carouselItems);

    return (
        <div className='home-container'>
            {/* <div className='carousel-item-container'>
                <Slider {...settings}>
                    {carouselItems && carouselItems.map(carouselItem => {
                        return <img key={carouselItem.id} src={carouselItem.bannerImageUrl}></img>
                    })}
                </Slider>
            </div> */}
            This is home
        </div>
    );
}

export default Home;