import { Link, Outlet } from 'react-router-dom';

function Products() {
	return (
		<div className="products">
			<div className="container">
				<div className="products-box">
					<div className="products-nav">
						<ul>
							<li>
								<Link to="">All Products</Link>
							</li>
							<li>
								<Link to="meat">Meat Only</Link>
							</li>
							<li>
								<Link to="vegeterian">Vegeterian</Link>
							</li>
							<li>
								<Link to="add-product">Add Product</Link>
							</li>
						</ul>
					</div>
					<div className='products-wrapping-box'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
