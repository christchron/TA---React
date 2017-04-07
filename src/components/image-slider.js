import React from 'react';
import Slider from 'react-slick';

export default (props) => {
	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:10,
      // pauseOnHover: false,
      arrows: true,
      // dotsClass: "margin-bottom-50"
    };
	return (
		<Slider {...settings}>
			<div style={{paddingLeft: 60+"px"}}><img src='banner-1.jpg' /></div>
			<div style={{paddingLeft: 60+"px"}}><img src='banner-2.jpg' /></div>
			<div style={{paddingLeft: 60+"px"}}><img src='banner-3.jpg' /></div>
		</Slider>
	);
}