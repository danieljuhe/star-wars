import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import home  from "../views/home";

const Starships = () =>{
    const params = useParams()
    const [starships, setStarships] = useState()

    useEffect(()=>{
        fetch(`https://swapi.tech/api/starships/${params.uid}`)

    }, [])
    return <h1 className="footer-2">Detalle de nave: {params.id}</h1>
        
       /* then((response) =>{
            return response.json()
        }).then((response) =>{
            setStarships(response)
        })
    }, []);
        return <div>
        {   
            starships ? <h1 className="footer-2">Nombre: {starships.name}</h1> : 'Cargando...'
        }
        </div>*/
}

export default Starships;

   /*.
        
        
        
        }, [])
     return <h1 className="footer-2">Detalle de nave: {params.name}</h1>*/