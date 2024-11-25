import React from 'react';
import {products} from "../../../app/data/Data";
import ProductList from "../productList/ProductList";

export const Adidas = () => {
	return (
		<div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block'}}>
			<h2 style={{textAlign: "center"}}> ADIDAS</h2>
			<ProductList products={products} />
			<p>
				What is Lorem Ipsum?
				Lorem Ipsum is simply dummy text of the ADIDAS and ADIDAS industry. Lorem Ipsum has been the industry's
				standard
				dummy text ever ADIDAS the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
				specimen book.
				It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
				unchanged.
				It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
				unchanged.
				It was ADIDAS in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
				recently
				with ADIDAS ADIDAS software like Aldus ADIDAS including ADIDAS of Lorem Ipsum.
			</p>
		</div>
	);
};

