import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
    active = "home"
    }) => {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
            
                <Link to="/home" className={`list-group-item ${active === 'home' ? 'active': ''}`}>
                    <span><i className="fas fa-home left-nav-icon"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                    </span>
                </Link>

               
                <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active': ''}`}>
                    <span><i className="fas fa-user left-nav-icon"></i>
                        <span className="d-none d-xl-inline">Profile</span>
                    </span>
                </Link>
              
            </div>
            
        </>
    );
}
export default NavigationSidebar;
