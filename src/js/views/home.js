import React, { useEffect, useState, Component } from "react";
import "../../styles/home.css";

export const Home = () => {

	const[characters, setCharacters]=useState([]);
	const[planets, setPlanets]=useState([])

	useEffect(()=>{
		fetch("https://swapi.dev/api/people/")
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacters(response.results)
		})
	})

	useEffect(()=>{
		fetch("https://swapi.dev/api/planets/")
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
				{characters.length===0 ?  <p className="loading"><div class="lds-roller"><div></div><div></div><div>
					</div><div></div><div></div><div></div><div></div><div></div></div></p>: ''}
				<div className="d-flex flex-row flex-nowrap">
					{characters.map((character, index)=>{
						return (
							<div className="card" key={index}>
							<img src="https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png" className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {character.name}</h5>
							<p className="card-text">Gender: {character.gender}</p>
							<p className="card-text">Eye color: {character.eye_color}</p>
							<p className="card-text">Hair color: {character.hair_color}</p>
							<a href="#" className="btn btn-primary">Learn More</a>
							<a href="#" className="btn btn-primary"><i className="fa fa-heart text-warning" /></a>
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
				{planets.length===0 ? <p className="loading"><div class="lds-roller"><div></div><div></div><div>
					</div><div></div><div></div><div></div><div></div><div></div></div></p>: ''}
				<div className="d-flex flex-row flex-nowrap">
				{planets.map((planet, value)=>{
						return (
							<div className="card" key={value}>
							<img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {planet.name}</h5>
							<p className="card-text">Population: {planet.population}</p>
							<p className="card-text">Terrain: {planet.terrain}</p>
							<a href="#" className="btn btn-primary">Learn More</a>
							<a href="#" className="btn btn-primary"><i className="fa fa-heart text-warning" /></a>
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
