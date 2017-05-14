import React, {Component} from 'react';

class ProductDescription extends Component{

	constructor(props) {
        super(props);
        console.log("a",props);
        const {data, id} = props;
        this.state = {
            data,
            id
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data,id} = nextProps
        if (nextProps) {
        	console.log("as",nextProps.id)
            this.setState({
            	data,
            	id
            });
        }
    }

    render(){
    	var content = <div></div>;

    	if(this.state.data.length!=0){
    		console.log("des",this.state.data.produk[this.state.id].description)
			content = 
				<div classNameName="row" style={{marginTop:"40px", marginLeft:"180px"}}>
					<div style={{width:"500px"}}>
						<div style={{fontSize:"30px",color:"#565a5c", fontWeight:"normal", marginLeft:"-2px"}}>Deskripsi Produk</div>
						<div style={{fontSize:"15px",marginTop:"-10px"}}><span>{this.state.data.produk[this.state.id].description}</span></div>
						<div style={{fontSize:"15px"}}>
							<div style={{marginTop:"10px", borderBottom:"1px solid #ccc"}}>
								<div style={{marginBottom:"10px"}}>Detil Produk</div>
							</div>
							<table style={{marginTop:"12px"}}>
								<thead >
									<tr>
										<th className="padding-table-deskripsi" colSpan="2">
											Detil Produk
										</th>
									</tr>
								</thead>
								<tbody property="brand">
									<tr>
										<td className="padding-table-deskripsi">
											Brand
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].brand}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<td className="padding-table-deskripsi">
											Warna
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].color}
										</td>
									</tr>
									<tr>
										<td className="padding-table-deskripsi">
											Material
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].material}
										</td>
									</tr>
								</tbody>
							</table>
							<table>
								<thead >
									<tr >
										<th className="padding-table-deskripsi" colSpan="2">
											Spesifikasi
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="padding-table-deskripsi">
											Ukuran Kemasan
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].box_size}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<td className="padding-table-deskripsi">
											Ukuran Barang
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].item_size}
										</td>
									</tr>
									<tr>
										<td className="padding-table-deskripsi">
											Berat
										</td>
										<td className="padding-table-deskripsi width-300">
											{this.state.data.produk[this.state.id].weight}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			
		}
		console.log("content",content)
    	return (
    		<div>
    			{content}
    		</div>	
		);
    }
    
}

export default ProductDescription;