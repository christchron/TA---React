import React from 'react';

export default (props) => {
	return (
		<div className="row" style={{marginLeft:"150px"}}>
			<div style={{width:"150px"}}>
				<img src="panci-1.jpg" style={{width:"100%"}}/>
			</div>
			<div style={{width:"640px"}}>
				<img src="panci-1.jpg" style={{width:"100%"}}/>
			</div>
			<div style={{width:"400px", color:"#6A6a6a"}}>
				<div><h1 className="product-view-name">Neoflam Aeni 28cm wok Apple green</h1></div>
				<div className="product-view-description">Wajan dari Neoflam</div>
				<div style={{fontSize:"15px", marginTop:"15px"}} >
					<img src="icon-ongkir-gratis.png" style={{width:"27px"}}/>
					<span> GRATIS Ongkir + Bayar di tempat*</span>
				</div>
				<div className="row" style={{marginLeft:"0px", marginTop:"20px", marginBottom:"20px"}}>
					<div style={{marginTop:"5px"}}>
						<span className="price" role="currency" >Rp</span>
						<span className="price" role="price">616,000</span>
					</div>
					<div className="ready-stock">
						<span>Produk ini Ready Stock</span>
					</div>
				</div>
				<div className="btn-beli-sekarang">
					<button type="submit" className="btn btn-x-large btn-block btn-primary btn-beli-sekarang">Beli Sekarang</button>
				</div>
				<div className="stock-amount">
					<span>Stok tersedia 99 buah</span>
				</div>
				<div>
					<img src="multibuy-offer.png"/>
				</div>
			</div>
		</div>
	);
}