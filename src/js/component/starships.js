import React from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Starships = () =>{
    
        return (
            <div className="container">
            <div class="card">
            <img src="" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{Starships.name}</h5>
            </div>
            </div>
            </div>
        )
}

export default Starships;

