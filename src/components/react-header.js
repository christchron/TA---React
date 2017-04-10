import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';

export default (props) => {
	return (
		<div className="row">
			<div className="col-md-12 header">
				<div className="col-md-2 header-text logo">
				  	<img src='logo-text.png'/>
				</div>
				<div className="col-md-3 margin-top-20">
					<div className="search-box">
						<form className="search-box">
							<FaSearch className= "margin-right-10" size={25}/>
							<input className="search-box" type="text" placeholder="Cari Semua Barang...    contoh: Mug..."/>
						</form>
					</div>
				</div>
				<div className="col-md-6  float-right margin-top-15">
					<div className="col-md-2 header-text margin-right-100">Berjualan di Dekoruma</div>
					<div className="col-md-2 header-text">Bantuan</div>
					<div className="col-md-2 header-text">Register</div>
					<div className="col-md-2 header-text">Login</div>
					<div className="col-md-2 header-text">Troli</div>
				</div>
		  	</div>
		</div>
	);
}