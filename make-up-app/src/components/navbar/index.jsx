import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">

            <div className="links">
                <Link to="/"><p href="">Make Up App</p></Link>
       
       
            </div>
            
               
        </div>
    )
}
