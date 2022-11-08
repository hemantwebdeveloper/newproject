import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ReactRouter</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><NavLink to="/" class="dropdown-item" className="link_item">Home</NavLink></li>
                <li><NavLink to="/about" class="dropdown-item" className="link_item" >About</NavLink></li>
                <li><NavLink to="/service" class="dropdown-item" className="link_item" >Services</NavLink></li>
                <li><NavLink to="/contact" class="dropdown-item" className="link_item" >Contact</NavLink></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
        </>
    )
}
export default Header;