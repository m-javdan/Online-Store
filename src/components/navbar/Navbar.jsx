import React from "react";
import {Link} from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa';

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">My Online Shop</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li style={{marginLeft: "Auto"}}>
                    <Link to="/shopping-card"> <FaShoppingCart/></Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
