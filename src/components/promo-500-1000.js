import React from 'react';

export default (props) => {
	console.log(props)
	return (
		<div className="row">
			<div style={{width:"500px"}}>
				<img src={props.imgSrc1} style={{width:"100%"}}/>
			</div>
			<div style={{width:"1000px"}}>
				<img src={props.imgSrc2} style={{width:"100%"}}/>
			</div>
		</div>
	);
}