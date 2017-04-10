import React from 'react';

export default (props) => {
	return (
		<div style={{marginTop:"50px"}}>
			<div className="center bold" style={{fontSize: "30px"}}>Produk Memukau Harga Terjangkau</div>
			<div className="center" style={{fontSize: "25px", color:"#82888a"}}>Semua yang kamu butuhkan untuk rumah idamanmu</div>
			<div className="row">
				<div style={{height:"300px", marginLeft:"40px"}}>
					<img src='5.2.1.png' style={{height:"100%"}}/>
				</div>
				<div style={{height:"300px", marginLeft:"60px"}}>
					<img src='5.3.png' style={{height:"100%"}}/>
				</div>
				<div style={{height:"300px", marginLeft:"60px"}}>
					<img src='5.4.png' style={{height:"100%"}}/>
				</div>
				<div style={{height:"300px", marginLeft:"60px"}}>
					<img src='5.5.png' style={{height:"100%"}}/>
				</div>
			</div>
		</div>
	);
}