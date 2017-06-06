import React, {Component} from 'react';
import RegisterForm from './register-form';
import Login from './login';

class Register extends Component{
	constructor(props) {
        super(props);
        this.state = {
            register: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
    	this.setState({
    		register: !this.state.register
    	})
    }

	render(){
		var contentForm;
		if (this.state.register){
			contentForm = 
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
					<a href="#" onClick={this.handleClick}> Login</a>
				</div>
			</div>
		}else{
			contentForm = <Login/>
		}
		return (
			<div>
				{contentForm}
			</div>
		);
	}
}
export default Register;