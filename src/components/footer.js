import React from 'react';

export default (props) => {
	return (
		<div style={{marginTop:"10px"}}>
			<div className="row" style={{height:"80px", background:"rgba(130, 136, 138, 0.12)"}}>
				<div style={{marginLeft:"100px", marginTop:"20px"}}>
					<img src="play-store.png"/>
				</div>
				<div style={{fontSize:"17px",marginLeft:"50px", width:"610px", marginTop:"20px"}}>
					<span>Install</span>
					<strong> Aplikasi Android Dekoruma</strong>
					<span> yuk! Masukkan no HP kamu dan Kania akan mengirim link downloadnya langsung ke HP kamu :-)</span>
				</div>
				<div style={{marginTop:"20px", marginLeft:"30px"}}>
					<form>
						<input type="text" placeholder="e.g. +628180001111" style={{width:"200px", height:"30px", fontSize:"17px !important"}}/>
					</form>
				</div>
				<div style={{marginTop:"20px", marginLeft:"20px"}}>
					<button type="submit" className="btn btn-block btn-primary" style={{width:"200px", height:"30px", fontSize:"12px !important"}}>Kirim Link Download</button>
				</div>
			</div>
			<div className="center" style={{fontSize:"15px", marginTop:"30px", marginBottom:"30px"}}>
				<div >Copyright 2017 © PT Dekoruma Inovasi Lestari | Artikel | Tech Career (Strong Engineer Urgently Wanted!)</div>
				<div >Customer Service: (021) 5890-9401 Senin - Jumat 09:00 - 18:00 E-mail: hello@dekoruma.com</div>
			</div>
		</div>
	);
}