import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const Starships = () =>{
    const params = useParams()
    const [starships, setStarships] = useState()

    useEffect(()=>{
        fetch(`https://swapi.tech/api/starships/${params.starshipsId}`)
         .then((response) =>{
            return response.json()
        }).then((response) =>{
            setStarships(response.result.properties)
        })
    }, []);
        return <div>
        {   
            starships ? 
            <div className="container my-5">
            <div className="col-md-6 mx-auto">
            <div class="card">
            <img src={`https://starwars-visualguide.com/assets/img/starships/${params.starshipsId}.jpg`} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{starships.name}</h5>
            </div>
            </div>
            </div>
            </div>
            : 'Cargando...'
        }
               </div>
               
}

export default Starships;

