import React from 'react';

export default (props) => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='col-md-4'>
					<div>
						<a href="">
							<div className="sofa-text">
								<div className='col-md-3'>
									<img src="sofa-1.png" style={{height: 82+"px",width:99+"px",marginTop:20+"px"}}/>
								</div>
								<div className='col-md-9 margin-top-20'>
									<span className="bold">SOFA </span>
									<img src="arrow.png"/>
									<div>Temukan sofa berkualitas dengan harga terjangkau</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className='col-md-4'>
					<div>
						<a href="">
							<div className="sofa-text">
								<div className='col-md-3'>
									<img src="mattress.png" style={{height: 82+"px",width:99+"px",marginTop:20+"px"}}/>
								</div>
								<div className='col-md-9 margin-top-20'>
									<span className="bold">KASUR </span>
									<img src="arrow.png"/>
									<div>Koleksi kasur lengkap dengan harga di bawah toko</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className='col-md-4'>
					<div>
						<a href="">
							<div className="sofa-text">
								<div className='col-md-3'>
									<img src="office-1.png" style={{height: 82+"px",width:99+"px",marginTop:20+"px"}}/>
								</div>
								<div className='col-md-9 margin-top-20'>
									<span className="bold">KURSI KANTOR </span>
									<img src="arrow.png"/>
									<div>Kursi kantor lengkap dengan harga kompetitif</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}