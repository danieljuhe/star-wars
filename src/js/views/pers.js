import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import "../../styles/pers.css";

const Personaje =()=>{

    const params = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(()=>{
		fetch(`https://swapi.tech/api/people/${params.personajeId}`)
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacter(response.result.properties)
		})
	})

    return (
            <div className="container my-5 justify-content-center">
                <div className="cardi">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.personajeId}.jpg`} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                        <h1 className="cardo">{character.name}</h1><br/>
                            <div className="css-typing">
                                <p> Gender: {character.gender} <br/></p>
                                <p> Height: {character.height} <br/></p>
                                <p> Birth Year: {character.birth_year} <br/></p>
                                <p> Skin Color: {character.skin_color} <br/> </p>
                                <p> Eye Color: {character.eye_color} </p>
                            </div><br/>
                            <p className="cardp">The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE
                                in the sinister voice of the late EMPEROR PALPATINE.GENERAL LEIA ORGANA dispatches secret agents to 
                                gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical 
                                FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to 
                                destroy any threat to his power....</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Personaje;