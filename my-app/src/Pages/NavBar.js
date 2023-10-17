import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(coaches) {
    return (
        <header>
            <div className="navbar">
                <Link to="/coaches">Coaches</Link>
            </div>
        </header>
    );
}

export default NavBar;
