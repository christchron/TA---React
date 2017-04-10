import React, { Component, PropTypes } from 'react';
import ReactHeader from './react-header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import SearchTrack from './search-track';
import Sofa from './sofa';
import ImageSlider from './image-slider';
import PromoBox from './promo-box';
import PromoBanner from './promo-banner';
import PromoAC from './promo-ac';
import BeliYuk from './beli-yuk';
import PromoDapur from './promo-dapur';
import PageBreak from './page-break';
import Promo5001000 from './promo-500-1000';
import ProductByPrice from './product-by-price';
import TopCategoriesFurniture from './top-categories-furniture';
import Footer from './footer';
import ItemList from './item-list';
import Register from './register';

class Home extends Component{
	static contextTypes = {
		router: PropTypes.object
	}
	// <ItemList/>
				// <Sofa/>
				// <ImageSlider/>
				// <PromoBox/>
				// <PromoBanner/>
				// <Promo5001000 imgSrc1="2.1.jpg" imgSrc2='2.2.jpg'/>
				// <BeliYuk/>
				// <PromoDapur/>
				// <PageBreak imgSrc="page-break.png" styling1={{marginLeft:"-20px", width:"1520px"}} styling2={{width:"100%"}}/>
				// <Promo5001000 imgSrc1="4.1.jpg" imgSrc2='4.2.jpg'/>
				// <ProductByPrice/>
				// <PageBreak imgSrc="6.1.jpg" styling1={{marginLeft:"-20px", width:"1520px",marginTop:"50px"}} styling2={{width:"100%"}}/>
				// <TopCategoriesFurniture/>

	render() {
		console.log(this.props.location.pathname.indexOf("login"))
		var content;
		return (
			<div>
				<h3><ReactHeader/></h3>
				
				<Register/>
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { analyticsData: state.analyticsData.all }
}

const mapDispatchToProps = (dispatch) => {
	return{
		fetchAnalyticsAction: bindActionCreators(fetchDataActionCreators,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 