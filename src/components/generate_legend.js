import React from 'react';

export default (props) => {

	var legends = [];
    for (var i = 1; i<props.data.length ; i++){
    	var tempLegend = {
    		label: props.data[i][0],
    		color: props.data[i][2]
    	};
    	legends.push(tempLegend);
    };
    var i = 0;
    var showLegend = legends.map((legend) => {
    	i++;
    	return (
    		<div style={{display:"inline-block"}} key={i}>
    			<div style = {{width: "100px"}}>
	    			<div style={{width:"10px", height:"10px",display: "inline-block", border:"1px solid", borderRadius:"0.1rem !important", background:legend.color}}></div>
	    			<span style={{fontSize:"0.7rem"}}>  {legend.label}</span>
    			</div>
    		</div>
    	);
    });

    return (<
    	div style={{textAlign: "center"}}>
	    	{showLegend}
	    </div>
	);
}