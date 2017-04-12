import React, { Component }  from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import SearchTrack from './search-track';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log("a",props);
        const {data} = props;
        this.state = {
            data,
            perPage: 4,
            currentPage:0,
            pageCount:1
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data} = nextProps
        if (nextProps) {
            this.setState({
            	data,
            	slicedData: _.chunk(data.produk,this.state.perPage),
            	pageCount: Math.ceil(data.produk.length/this.state.perPage)
            });
        }
    }

    handlePageClick = (data) => {
	    let selected = data.selected;
	    this.setState({
	      	currentPage: data.selected
	    });
  	};

	render(){
		if(this.state.data){
			if (!this.state.data.produk){
			}else{
				console.log("props",this.state.data.produk.length);
				console.log("currentPage",this.state.currentPage)
				var products = this.state.slicedData[this.state.currentPage].map((product) =>
					<div style={{marginLeft: 50+'px', margin:"30px",width:"250px"}}	key={product.id}>
						<div className="center" style={{height:"140px",  height:"200px"}}>
							<img src={product.image} style={{maxWidth:"200px", maxHeight:"200px"}}/>
						</div>
						<div className="center">
							<span className="price-tag">Rp</span>
							<span className="price-number">{product.price}</span>
						</div>
						<div className="center">
							<div className="product-name">
								{product.name}
							</div>
						</div>
					</div>
				);

				var productList=[];

				for (var i = 0; i<=products.length;i++){
					var slot = Math.floor(i / 4);
				 	productList[slot] = productList[slot] || [];
				  	productList[slot].push(products[i]);
				}

				console.log("productList",productList)

				var showProduct = productList.map((product,index) =>
					<div className="row" key={index}>
						{product}
					</div>
				);
			}
			
		}
		
		return (
			<div style={{marginTop:"70px"}}>
				<div className="row">
					<SearchTrack/>
					<div style={{marginLeft:"1000px", marginTop:"-8px"}}>
						<ReactPaginate 
								previousLabel={"previous"}
								nextLabel={"next"}
								breakLabel={<a href="">...</a>}
								breakClassName={"break-me"}
								pageCount={this.state.pageCount}
								marginPagesDisplayed={2}
								pageRangeDisplayed={5}
								onPageChange={this.handlePageClick}
								containerClassName={"pagination"}
								subContainerClassName={"pages pagination"}
								activeClassName={"active"} />
					</div>
				</div>
				<div className="row">
					<div style={{width:"150px", fontSize:"13px", height:"1000px", marginLeft:"30px"}}>
						<div><h4 style={{textAlign:"left"}}>Tampilkan hasil untuk: </h4></div>
						<div style={{fontWeight:"500", marginLeft:"10px"}}>Dapur (25)</div>
					</div>
					<div>
						{showProduct}
					</div>
				</div>
			</div>
		);

	}
	
}

export default Search;