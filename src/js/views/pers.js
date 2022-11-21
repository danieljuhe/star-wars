import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

const Personaje =()=>{

    const params =useParams();
    const [character, setCharacter]=useState([]);

    useEffect(()=>{
		fetch(`https://swapi.tech/api/people/${params.uid}`)
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacter(response.results)
		})
	})

    return (<div>
        { 
            character ?
            <div className="container">
                <h1>personaje:{character.name}</h1>
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{character.name}</h5>
                            <p class="card-text"></p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        : ''}
        </div>
        )
}

export default Personaje;