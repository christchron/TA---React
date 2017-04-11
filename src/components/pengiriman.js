import React from 'react';

export default (props) => {
	return (
		<div style={{fontSize:"15px", width:"500px", marginLeft:"180px", marginTop:"30px"}}>
			<div style={{borderBottom: "1px solid #ccc"}}><div style={{marginBottom:"5px"}}>Pengiriman</div></div>
			<div className="row" style={{marginLeft:"0px"}}>
				<div>
					<div style={{width:"250px"}}>Produk ini Ready Stock</div>
					<div style={{width:"250px", marginBottom:"8px"}}>Pengiriman: <strong>4-5 hari kerja</strong> ke Jabodetabek</div>
					<div style={{width:"250px", fontSize:"12px"}}>Waktu pengiriman di atas <u>sudah termasuk</u> 3 hari waktu pemenuhan untuk memproses barang ini</div>
				</div>
				<div style={{width:"250px", color:"#00b1bb"}}>Lihat <strong>Estimasi Waktu Pengiriman</strong> ke Wilayah Lain dan <strong>Jangkauan COD</strong></div>
			</div>
		</div>
	);
}