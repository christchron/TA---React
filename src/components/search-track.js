import React from 'react';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaLongArrowLeft from 'react-icons/lib/fa/long-arrow-left'; 

export default (props) => {
	return (
		<div className="row search-track">
			<div className="row">
				<div style={{marginTop:"5px"}}><FaLongArrowLeft size={10}/></div>
				<span style={{fontSize:"15px", marginLeft:"5px"}}>Kembali</span> 
			</div>
			<div style={{marginLeft:"15px"}}>
				<FaAngleRight size={30}/>
			</div>
		</div>
	);
}