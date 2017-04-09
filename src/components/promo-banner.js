import React from 'react';

export default (props) => {
	return (
		<div className="row" style={{width:"100%", marginLeft:'250px',marginTop:'650px',marginBottom:'50px'}}>
			<div>
				<img src='usp-price-down.png' style={{width: 30+'px', verticalAlign:''}}/>
				<span style={{fontSize: 20+'px', fontWeight: 'bold', color: '#6A6a6a', verticalAlign:'bottom'}}>Harga jujur sepanjang tahun</span>
			</div>
			<div>
				<img src='usp-fast-shipping.png' style={{width: 30+'px',marginLeft:'50px'}}/>
				<span style={{fontSize: 20+'px', fontWeight: 'bold', color: '#6A6a6a', verticalAlign:'bottom'}}>Gratis ongkos kirim & COD*</span>
			</div>
			<div>
				<img src='usp-bulk-saving.png' style={{width: 30+'px',marginLeft:'50px'}}/>
				<span style={{fontSize: 20+'px', fontWeight: 'bold', color: '#6A6a6a', verticalAlign:'bottom'}}>Tambah barang tambah murah</span>
			</div>
		</div>
	);
}