import React, { useEffect, useState, Component } from "react";
import "../../styles/home.css";


import { Link } from "react-router-dom";

export const Home = () => {

	const[characters, setCharacters]=useState([]);
	const[planets, setPlanets]=useState([]);
	const[starships, setStarShips]=useState([]);

	useEffect(()=>{
		fetch("https://swapi.tech/api/people/")
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacters(response.results)
		})
	})

	useEffect(()=>{
		fetch("https://swapi.tech/api/planets/")
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setPlanets(response.results)
		})
	})

	useEffect(()=>{
		fetch("https://swapi.tech/api/starships/")
		.then((response)=>{ 
			return response.json()
		})
		.then((response)=>{
			setStarShips(response.results)
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
							<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {character.name}</h5>
							<Link to={`/personaje/${character.uid}`}>
							<a href="#" className="btn btn-primary">Learn More</a>
							</Link>
							<a href="#" className="btn btn-primary"><i className="fa fa-heart text-warning"/></a>
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
							<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {planet.name}</h5>
							<Link to={`/planets/${planet.uid}`}>
							<a href="#" className="btn btn-primary">Learn More</a>
							</Link>
							<a href="#" className="btn btn-primary"><i className="fa fa-heart text-warning"/></a>
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
				<h2 className="font-weight-light">Starships</h2>
				{starships.length===0 ?  <p className="loading"><div class="lds-roller"><div></div><div></div><div>
					</div><div></div><div></div><div></div><div></div><div></div></div></p>: ''}
				<div className="d-flex flex-row flex-nowrap">
					{starships.map((starship, index)=>{
						return (
							<div className="card" key={index}>
							<img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="card-img-top" alt="..."/>
							<div className="card-body">
							<h5 className="card-title">Name: {starship.name}</h5>
							<Link to={`/starships/${starship.uid}`}>
							<a href="#" className="btn btn-primary">Learn More</a>
							</Link>
							<a href="#" className="btn btn-primary"><i className="fa fa-heart text-warning" /></a>
							</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
		</div>
		<br />
	</div>
	)
	};
