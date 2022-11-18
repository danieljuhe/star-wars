import React, { useState, useEffect } from "react";

export const Character = () =>{

    const [characters, setCharacters]=useState([]);

    useEffect(()=>{
		fetch("https://swapi.tech/api/people/")
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacters(response.results)
		})
	})

    return (
    <div className="container">
        {
            characters.map((character,index)=>{
                return(
                    
                    <h1 key={index}>{character.name}</h1>
                
                )
            })
        }
    </div>
    )


}

export default Character;