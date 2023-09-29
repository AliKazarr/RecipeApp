import React from "react";
import './Navbar.css'
import {NavLink,Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
function Navbar() {
    const {color}= useContext(ThemeContext)
   
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
        <div className="container">

            <Link className="navbar-brand" to='/'>Yemek Tarifleri</Link>
            <ul className="navbar-nav me-auto">
                <li className="navbar-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="nav-link" to='/create'>Create</NavLink>
                </li>
                {/* <li className="navbar-item">
                    <NavLink className="nav-link" to='/details'>Details</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="nav-link" to='/search'>Search</NavLink>
                </li> */}
            </ul>
        <SearchBar />

        </div>
      </nav>
     
   
  );
}

export default Navbar;
