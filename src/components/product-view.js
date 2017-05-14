import React, {Component} from 'react';

class ProductView extends Component{
	constructor(props) {
        super(props);
        console.log("a",props);
        const {data, id} = props;
        this.state = {
            data,
            id
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data,id} = nextProps
        if (nextProps) {
        	console.log("as",nextProps.id)
            this.setState({
            	data,
            	id
            });
        }
    }

	render(){
		var content=<div></div>;

		if(this.state.data.length!=0){
			content=
				<div className="row" style={{marginLeft:"150px"}}>
					<div style={{width:"150px"}}>
						<img src={this.state.data.produk[this.state.id].image} style={{width:"100%"}}/>
					</div>
					<div style={{width:"550px", margin:"50px"}}>
						<img src={this.state.data.produk[this.state.id].image} style={{width:"100%"}}/>
					</div>
					<div style={{width:"400px", color:"#6A6a6a"}}>
						<div><h1 className="product-view-name">{this.state.data.produk[this.state.id].name}</h1></div>
						<div className="product-view-description">{this.state.data.produk[this.state.id].item_and_brand}</div>
						<div style={{fontSize:"15px", marginTop:"15px"}} >
							<img src="icon-ongkir-gratis.png" style={{width:"27px"}}/>
							<span> GRATIS Ongkir + Bayar di tempat*</span>
						</div>
						<div className="row" style={{marginLeft:"0px", marginTop:"20px", marginBottom:"20px"}}>
							<div style={{marginTop:"5px"}}>
								<span className="price" role="currency" >Rp</span>
								<span className="price" role="price">{this.state.data.produk[this.state.id].price}</span>
							</div>
							<div className="ready-stock">
								<span>Produk ini Ready Stock</span>
							</div>
						</div>
						<div className="btn-beli-sekarang">
							<button type="submit" className="btn btn-x-large btn-block btn-primary btn-beli-sekarang">Beli Sekarang</button>
						</div>
						<div className="stock-amount">
							<span>Stok tersedia {this.state.data.produk[this.state.id].stok} buah</span>
						</div>
						<div>
							<img src="multibuy-offer.png"/>
						</div>
					</div>
				</div>
		}
		return (
			<div>
				{content}
			</div>
		);
	}
}
export default ProductView;