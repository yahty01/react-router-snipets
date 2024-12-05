import React from 'react';
import {AllProducts, ProductSneaker} from "../../../../app/data/Data";
import {Link} from "react-router-dom";

type Props = {
	allSneakers: AllProducts
}

export const Nike = (props: Props) => {
	const sneakers: ProductSneaker[] = [...props.allSneakers['nike']]

	return (
		<div style={{paddingLeft: '15px', paddingRight: '15px', display: 'inline-block', minHeight: '80vh'}}>
			<h2 style={{textAlign: "center"}}> NIKE </h2>
			{sneakers.map(product => (
				<Link to={`/${product.brand}/${product.id}`} key={product.id}>
					<img
						style={{width: "30%", height: "auto", margin: "0 10px"}}
						src={product.picture[0]}
						alt={product.model}/>
				</Link>
			))}
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Beatae cum eveniet incidunt iusto magnam minus molestiae officiis placeat reprehenderit ut.
				Ad beatae eius enim explicabo ipsam libero minima molestiae nulla!</p>
		</div>
	);
};

