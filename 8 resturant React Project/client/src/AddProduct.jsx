import { useContext, useEffect, useState } from 'react';
import { Context } from './Layout';

function AddProduct() {
	return (
		<div>
			<h2>Add Product</h2>
			<div className="products-grid">
				<div className="product">product</div>
				<div className="product">product</div>
				<div className="product">product</div>
				<div className="product">product</div>
				<div className="product">product</div>
				<div className="product">product</div>
				<div className="product">product</div>
			</div>
		</div>
	);
}

export default AddProduct;
