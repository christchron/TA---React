import React from 'react';

export default (props) => {
	return (
		<div className="promo-box">
			<div className="promo-box-header">
				Temukan inspirasi rumah idaman dan dekorasi dengan harga terjangkau
			</div>
			<div className="col-md-12 row " style={{marginLeft:1+'px', marginTop: -1+'px',background:'white', border: 1+'px solid #00b1bb'}}>
				<div style = {{maxWidth:25+'%',marginLeft:10+'px', marginTop:10+'px'}}>
					<img src='promo-1.jpg' style={{width:350+'px'}}/>
					<img src='promo-2.jpg' style={{width:350+'px'}}/>
				</div>
				<div style={{marginLeft:120+'px'}}>
					<div className="row">
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-1.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">68,000</span>
							</div>
							<div className="center">
								<div className="product-name">
									Pasabache Garden Jar 0.6 Ltr 2pcs
								</div>
							</div>
						</div>
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-2.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">174,000</span>
							</div>
							<div className="center">
								<div className="product-name">
									Oxone Kitchen Tool OX-964
								</div>
							</div>
						</div>
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-3.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">150,000</span>
							</div>
							<div className="center">
								<div className="product-name">
									Fancy Furni Antler cutting board
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-4.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">616,000</span>
							</div>
							<div className="center">
								<div className="product-name">
									Neoflam Aeni 28cm wok Apple green
								</div>
							</div>
						</div>
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-5.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">39,900</span>
							</div>
							<div className="center">
								<div className="product-name">
									IKEA Elly Lap Dapur 4pcs
								</div>
							</div>
						</div>
						<div style={{width: 150+'px', marginLeft: 50+'px'}}	>
							<div className="center">
								<img src='produk-6.jpg' style={{width: 150+'px'}}/>
							</div>
							<div className="center">
								<span className="price-tag">Rp</span>
								<span className="price-number">165,000</span>
							</div>
							<div className="center">
								<div className="product-name">
									As Seen On TV Genius Nicer Dicer Plus
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}