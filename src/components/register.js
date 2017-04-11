import React from 'react';

export default (props) => {
	return (
		<div className="register">
			<div style={{margin:"20px"}}><h1 className="bold">Register</h1></div>
			<div style={{width:"300px", marginLeft:"22.5px", borderBottom:"1px solid #dce0e0;"}}>
				<form>
					<input className="decorative-input" type="text" placeholder="Nama"/>
					<input className="decorative-input" type="email" placeholder="Email"/>
					<input className="decorative-input" type="password" placeholder="*Buat Password Baru"/>
				</form>
				<div style={{marginTop:'10px', color:"#777"}}>
					<small style={{fontSize:"12px !important"}}>Dengan menekan 'Daftar', saya mengkonfirmasi kalau saya setuju dengan Kebijakan Privasi</small>
				</div>
				<div style={{textAlign:"right", marginTop:'20px', marginBottom:"20px"}}>
					<button className="btn btn-primary btn-large btn-daftar" style={{fontSize:"14px !important"}}>Daftar</button>
				</div>
			</div>
			<div style={{margin:"20px", fontSize:"15px	"}}>
				<span>Sudah terdaftar di Dekoruma?</span>
				<a href="/login"> Login</a>
			</div>
		</div>
	);
}