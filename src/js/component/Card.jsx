import React from "react";

const CardElement = () => {
	const boton = {
		display: "flex",
		justifyContent: "center",
	};
	return (
		<div className="card">
			<img
				src="https://picsum.photos/id/295/200/100"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a
					natural lead-in to additional content. This content is a
					little bit longer.
				</p>
				<div style={boton}>
					<a href="#" className="btn btn-primary">
						Call to action!
					</a>
				</div>
			</div>
		</div>
	);
};
/* COMPONENTE GRILLA */

const Card = () => {
	const boton = {
		display: "flex",
		justifyContent: "center",
	};
	return (
		<div className="row row-cols-1 row-cols-md-4 g-4">
			<div className="col">
				<CardElement />
			</div>
			<div className="col">
				<CardElement />
			</div>
			<div className="col">
				<CardElement />
			</div>
			<div className="col">
				<CardElement />
			</div>
		</div>
	);
};
export default Card;
