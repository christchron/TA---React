import React from 'react';

export default (props) => {
	return (
		<div classNameName="row" style={{marginTop:"40px", marginLeft:"180px"}}>
			<div style={{width:"500px"}}>
				<div style={{fontSize:"30px",color:"#565a5c", fontWeight:"normal", marginLeft:"-2px"}}>Deskripsi Produk</div>
				<div style={{fontSize:"15px",marginTop:"-10px"}}><span>Aluminium lapisan keramik berbahan alami (Batu dan pasir) yang tidak menghasilkan emisi berbahaya seperti PFOA</span></div>
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
								<td className="padding-table-deskripsi">
									Neoflam
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="padding-table-deskripsi">
									Warna
								</td>
								<td className="padding-table-deskripsi">
									Hijau
								</td>
							</tr>
							<tr>
								<td className="padding-table-deskripsi">
									Material
								</td>
								<td className="padding-table-deskripsi">
									almunium
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
								<td className="padding-table-deskripsi">
									28cm x 28cm x 8cm
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="padding-table-deskripsi">
									Ukuran Barang
								</td>
								<td className="padding-table-deskripsi">
									8cm
								</td>
							</tr>
							<tr>
								<td className="padding-table-deskripsi">
									Berat
								</td>
								<td className="padding-table-deskripsi">
									1kg 
								</td>
							</tr>
						</tbody>
					</table>

				</div>
			</div>
			<div>
			</div>
		</div>
	);
}