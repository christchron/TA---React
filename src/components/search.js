import React, { Component }  from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import SearchTrack from './search-track';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log("a",props);
        const {data,category} = props;
        this.state = {
            data,
            category,
            perPage: 1200,
            currentPage:0,
            pageCount:1,
            categoryData:[]
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data,category} = nextProps
        if (nextProps) {
        	var categoryData=[];
        	data.produk.map((produk) =>{
        		if(produk.category === category){
        			categoryData.push(produk);
        		}
        	}) ;
        	console.log(categoryData);
            this.setState({
            	data,
            	categoryData,
            	slicedData: _.chunk(categoryData,this.state.perPage),
            	pageCount: Math.ceil(categoryData.length/this.state.perPage)
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
				var products = this.state.slicedData[this.state.currentPage].map((product) =>
					<div style={{marginLeft: 50+'px', margin:"30px",width:"250px"}}	key={product.id}>
						<a href={"/produk?id="+product.id}>
							<div className="center" style={{height:"200px"}}>
								<img src={product.image} style={{maxWidth:"200px", maxHeight:"200px"}}/>
							</div>
							<div className="center" style={{color:"#82888a"}}>
								<span className="price-tag">Rp</span>
								<span className="price-number">{product.price}</span>
							</div>
							<div className="center">
								<div className="product-name">
									{product.name}
								</div>
							</div>
						</a>
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
			<div>
				<div className="row" style={{marginLeft:"0px"}}>
					<SearchTrack/>
					<div style={{marginLeft:"1000px", marginTop:"-8px"}}>
						<ReactPaginate 
								previousLabel={"<"}
								nextLabel={">"}
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
						<div style={{fontWeight:"500", marginLeft:"10px"}}>{this.state.category} ({this.state.categoryData.length})</div>
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