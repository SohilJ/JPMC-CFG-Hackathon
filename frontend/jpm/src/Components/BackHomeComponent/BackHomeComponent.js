import React from 'react';
import { Link } from 'react-router-dom';


const BackHomeComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <Link to="/">
                <button class="btn btn-outline-success text-white" type="button">Back to Menu</button>
            </Link>
        </nav>

    )
}

export default BackHomeComponent;