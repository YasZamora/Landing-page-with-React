import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
/* COMPONENTE NAVBAR */

/* COMPONENTE JUMBOTRON */

/*COMPONENTE CARD */

/* COMPONENTE FOOTER */
// const Footer = () => {};
/* create your first component*/
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="PreJumbotron">
					<Jumbotron />
				</div>
				<br></br>
				<Card />
			</div>
			<div className="Footer">
				<p>Copyright © Your Website 2019</p>
			</div>
		</>
	);
};

export default Home;
