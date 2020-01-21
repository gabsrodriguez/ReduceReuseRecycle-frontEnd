import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import "../../styles/navbar.scss";
//import { Link } from "react-router";
//import { HashLink as Link } from "react-router-hash-link";

export const Home = () => {
	return (
		<div>
			<div className="jumbotron1 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Ybag 3000</h1>
					<p className="lead">the ybag3000 y not 420??</p>
					<Link to="/registration">
						<button className="btn2 btn-light btn-lg" role="button">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
			<div className="jumbotron2 jumbotron-fluid" id="earthInfo">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<div className="jumbotron3 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<div className="jumbotron4 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<div className="jumbotron5 jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
		</div>
	);
};
