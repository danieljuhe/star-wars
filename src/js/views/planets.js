import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "../../styles/pers.css";

const Planetas =()=>{

    const params = useParams();
    const [planet, setPlanet] = useState([]);

    useEffect(()=>{
		fetch(`https://swapi.tech/api/planets/${params.uid}`)
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setPlanet(response.result.properties)
		})
	})

    return (
            <div className="container my-5">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{planet.name}</h3>
                            <p className="card-text">The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE
                                in the sinister voice of the late EMPEROR PALPATINE.GENERAL LEIA ORGANA dispatches secret agents to 
                                gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical 
                                FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to 
                                destroy any threat to his power....</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Planetas;