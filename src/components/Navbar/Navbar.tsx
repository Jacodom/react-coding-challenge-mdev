import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <> 
            <Link to="/">Home</Link>
            <Link to="/movie-details/123">Movie Details</Link>
        </>
    )
};

export default Navbar;