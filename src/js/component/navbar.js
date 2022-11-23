import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";



export const Navbar = () => {

    const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 w-75 mx-auto bg-opacity-75">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 nav-logo ms-3"><i class="fas fa-jedi"></i></span>
			</Link>
			<div>
                    <button class="btn btn-secondary dropdown-toggle me-4" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Favorites {store.fav.length}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-md-end">
                    {store.fav.map((favorito, index)=>{
                        return <li>
                                    <a class="dropdown-item" href="#" key={index}>{favorito}
                                    <button className="libutton"><i class="fa-solid fa-trash-can"></i></button>
                                    </a>
                                </li>
                    })}

                        
                    </ul>
                </div>
		</nav>
	);
};
