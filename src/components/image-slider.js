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
      arrows: true
    };
	return (
		<Slider {...settings}>
			<div><img src='banner-1.jpg' style={{width:"100%"}} /></div>
			<div><img src='banner-2.jpg' style={{width:"100%"}} /></div>
			<div><img src='banner-3.jpg' style={{width:"100%"}} /></div>
		</Slider>
	);
}