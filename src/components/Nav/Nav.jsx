import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./estiloNav.css"
export default function Nav({onSearch}){
    return(
        <nav>
            <SearchBar onSearch={onSearch}></SearchBar>
            <div className="cont-button">
                <Link to="/about" className="links-button">
                <button>About</button>
                </Link>
                <Link to="/home" className="links-button">
                <button>Home</button>
                </Link>  
            </div>
            
        </nav>
    )
}