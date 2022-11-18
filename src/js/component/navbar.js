import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 w-75 mx-auto bg-opacity-75">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 nav-logo ms-3"><i class="fas fa-jedi"></i></span>
			</Link>
			<div>
                    <button class="btn btn-secondary dropdown-toggle me-4" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Favorites 0
                    </button>
                    <ul class="dropdown-menu dropdown-menu-md-end">
                        <li><a class="dropdown-item" href="#">(Empty)</a></li>
                    </ul>
                </div>
		</nav>
	);
};
