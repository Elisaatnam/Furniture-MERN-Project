import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
        <NavLink to= "/" className="nav-home">
            <div className="nav-site">
                <h5>HOME</h5>
            </div>
        </NavLink>
        <NavLink to="/bigstuff" className="nav-bigstuff">
            <div className="nav-site">
                <h5>BIG STUFF</h5>
            </div>
        </NavLink>
        <NavLink to="/notsobigstuff" className="nav-notsobigstuff">
            <div className="nav-site">
                <h5>NOT SO BIG STUFF</h5>
            </div>
        </NavLink>
        <NavLink to="/smallstuff" className="nav-smallstuff">
            <div className="nav-site">
                <h5>SMALL STUFF</h5>
            </div>
        </NavLink>
        </nav>
        
        </>
    );
}

export default Nav;


        
 

