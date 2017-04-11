import React from 'react';

export default (props) => {
	return (
		<div style={{fontSize:"12px", width:"500px", marginLeft:"180px", marginTop:"30px"}}>
			<div style={{fontSize:"15px", borderBottom: "1px solid #ccc"}}><div style={{marginBottom:"5px"}}>Disclaimer</div></div>
			<div className="row" style={{marginLeft:"0px"}}>
				<div>
					<div style={{width:"100px", color:"#565a5c"}}>Color Disclaimer</div>
				</div>
				<div>
					<div style={{width:"400px", textAlign:"justify"}}>Dikarenakan banyaknya variasi perangkat monitor dan browser, warna yang ditampilkan pada monitor Anda akan berbeda. Dengan begitu, kami tidak bisa menjamin warna yang Anda lihat atau warna yang ditampilkan di website kami akan terlihat sama pada semua perangkat.</div>
					<div style={{width:"400px", textAlign:"justify"}}>Kami melakukan usaha yang terbaik untuk memastikan warna yang ditampilkan di website kami adalah warna yang sama dengan produk sebenarnya.</div>
				</div>
			</div>
			<div className="row" style={{marginLeft:"0px"}}>
				<div>
					<div style={{width:"100px", color:"#565a5c"}}>Pengaturan Pengembalian</div>
				</div>
				<div>
					<div style={{width:"400px", textAlign:"justify"}}>Pengembalian uang penuh tanpa syarat (no question asked - full refund policy) dalam kurun waktu 14 hari sejak Anda menerima produk yang Anda beli dari Dekoruma.com selama produk masih dalam kondisi sempurna.</div>
					<div style={{width:"400px", textAlign:"justify"}}>Pengembalian uang penuh jika produk tidak sesuai dengan deskripsi atau diterima dalam keadaan rusak. Barang tetap anda miliki.</div>
					<div style={{width:"400px", textAlign:"justify"}}>Lihat Detail</div>
				</div>
			</div>
			<div className="row" style={{marginLeft:"0px"}}>
				<div>
					<div style={{width:"100px", color:"#565a5c"}}>Jaminan Penjual</div>
				</div>
				<div>
					<div style={{width:"400px", textAlign:"justify"}}>Pengiriman dan Pemenuhan Tepat Waktu</div>
					<div style={{width:"400px", textAlign:"justify"}}><strong>Maksimum 6 hari kerja barang sampai (Jabodetabek)</strong></div>
				</div>
			</div>
			<img src="usp-protection.png" style={{width:"100%", marginTop:"30px"}}/>
		</div>
	);
}