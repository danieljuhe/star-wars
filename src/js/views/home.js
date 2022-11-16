import React, { useEffect, useState } from "react";
import "../../styles/home.css";

export const Home = () => {

	const[characters, setCharacters]=useState([]);
	const[planets, setPlanets]=useState([])

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/people')
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacters(response.results)
		})
	})

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/planets')
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setPlanets(response.results)
		})
	})
	
	return(
	<div className="container">
		<div className="row">
		<div className="scrollmenu">
			<div className="container-fluid py-2">
				<h2 className="font-weight-light">Characters</h2>
				<div className="d-flex flex-row flex-nowrap">
					{characters.map((character, index)=>{
						return (
							<div className="card">
							<img src="..." className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {character.name}</h5>
							<p className="card-text"></p>
							<a href="#" className="btn btn-primary">Learn More</a>
							</div>
							</div>
						)
					})}
						
				</div>
			</div>
		</div>
		</div>
		<div className="row">
		<div className="scrollmenu">
			<div className="container-fluid py-2">
				<h2 className="font-weight-light">Planets</h2>
				<div className="d-flex flex-row flex-nowrap">
				{planets.map((planet, index)=>{
						return (
							<div className="card">
							<img src="..." className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {planet.name}</h5>
							<p className="card-text"></p>
							<a href="#" className="btn btn-primary">Learn More</a>
							</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
		</div>
	</div>
	)
	};
