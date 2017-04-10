import React from 'react';

export default (props) => {
	return (
		<div className="login">
			<div style={{margin:"20px"}}><h1 className="bold">Halo! Selamat Datang!</h1></div>
			<div style={{width:"860px", marginLeft:"20px", borderBottom:"1px solid #dce0e0;"}}>
				<form>
					<input className="decorative-input" type="email" placeholder="Email"/>
					<input className="decorative-input" type="password" placeholder="*Password"/>
				</form>
				<div style={{marginTop:'10px', color:"#777"}}>
					<span style={{fontSize:"15px"}}><a href="">Lupa password?</a></span>
				</div>
				<div style={{textAlign:"right", marginTop:'20px', marginBottom:"20px"}}>
					<button className="btn btn-primary btn-large btn-daftar" style={{fontSize:"14px !important"}}>Login</button>
				</div>
			</div>
			<div style={{margin:"20px", fontSize:"15px	"}}>
				<span>Belum jadi member Dekoruma?</span>
				<a href="/register"> Register</a>
			</div>
		</div>
	);
}