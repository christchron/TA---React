import React from 'react';

export default (props) => {
	return (
		<div className="mengapa-dekoruma">
			<div style={{marginLeft:"40px", paddingTop:"30px"}}>
				<div style={{color:"#565a5c", fontSize:"30px"}}>Mengapa ke Dekoruma.com?</div>
				<div className="row">
					<div className="row" style={{marginLeft:"0px"}}>
						<img src='usp-price.png' style={{width:"40px",height:"40px", margin:"20px"}}/>
						<div style={{width:"370px"}}>
							<div style={{fontSize: "18px", fontWeight: 'bold', color: '#333', verticalAlign:'bottom'}}>Mulai pencarian produk rumah sendiri</div>
							<div style={{fontSize:"15px", color: '#333', verticalAlign:'bottom'}}>Ribuan produk pilihan dengan harga paling ekonomis & harga sesuai kualitas.</div>
						</div>
					</div>
					<div className="row"  style={{marginLeft:"30px"}}>
						<img src='usp-price-down.png' style={{width:"40px",height:"40px", margin:"20px"}}/>
						<div style={{width:"370px"}}>
							<div style={{fontSize: "18px", fontWeight: 'bold', color: '#333', verticalAlign:'bottom'}}>Harga Jujur Sepanjang Tahun</div>
							<div style={{fontSize:"15px", color: '#333', verticalAlign:'bottom'}}>Dekoruma.com tidak menaikkan harga lalu memberikan diskon besar-besaran.</div>
						</div>
					</div>
					<div className="row"  style={{marginLeft:"30px"}}>
						<img src='usp-cart.png' style={{width:"40px",height:"40px", margin:"20px"}}/>
						<div style={{width:"370px"}}>
							<div style={{fontSize: "18px", fontWeight: 'bold', color: '#333', verticalAlign:'bottom'}}>Pesanan Sampai di Depan Rumah</div>
							<div style={{fontSize:"15px", color: '#333', verticalAlign:'bottom'}}>Pilih barang apapun di Dekoruma.com, diantar GRATIS dan bisa bayar dirumah *</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}