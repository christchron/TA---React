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
import Login from './login';
import ProductView from './product-view';
import ProductRecommendation from './product-recommendation';
import ProductDescription from './product-description';
import Pengiriman from './pengiriman';
import Disclaimer from './disclaimer';
import MengapaDekoruma from './mengapa-dekoruma';
import Search from './search';

class Home extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	constructor() {
		super();
		this.state = { 
			data:[]
		};
	}

	setStartState(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("dekoruma.json");
	}

	componentWillMount() {
		this.setStartState();
	}

	componentWillReceiveProps(nextProps){
		console.log("next props",nextProps.analyticsData)
		const {analyticsData} = nextProps;
		if (analyticsData){
			this.setState({
				data: analyticsData
			});	
		}
	}

	render() {
		console.log("data",this.state.data)
		var content;
		if (this.props.location.pathname.indexOf("register") !== -1){
			content = <Register/>;
		}
		else if (this.props.location.pathname.indexOf("login") !== -1){
			content = <Login/>;
		}else if (this.props.location.pathname.indexOf("search") !== -1){
			content = <Search data={this.state.data}/>;
		}else if (this.props.location.pathname.indexOf("produk") !== -1){
			content = <div>
				<ItemList/>
				<SearchTrack/>
				<PromoBanner className="row promo-banner-product"/>
				<ProductView/>
				<ProductRecommendation/>
				<ProductDescription/>
				<Pengiriman/>
				<Disclaimer/>
				<MengapaDekoruma/>
			</div>
		}else{
			content = <div>
				<ItemList/>
				<Sofa/>
				<ImageSlider/>
				<PromoBox/>
				<PromoBanner className="row promo-banner-homepage"/>
				<Promo5001000 imgSrc1="2.1.jpg" imgSrc2='2.2.jpg'/>
				<BeliYuk/>
				<PromoDapur/>
				<PageBreak imgSrc="page-break.png" styling1={{marginLeft:"-20px", width:"1520px"}} styling2={{width:"100%"}}/>
				<Promo5001000 imgSrc1="4.1.jpg" imgSrc2='4.2.jpg'/>
				<ProductByPrice/>
				<PageBreak imgSrc="6.1.jpg" styling1={{marginLeft:"-20px", width:"1520px",marginTop:"50px"}} styling2={{width:"100%"}}/>
				<TopCategoriesFurniture/>;
			</div>
		}
		return (
			<div>
				<h3><ReactHeader/></h3>
				${content}
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