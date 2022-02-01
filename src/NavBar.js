import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Styles/NavBar.css'
import UserContext from "./context/UserContext";

const NavBar = ({ logout, token }) => {

    const currentUser = useContext(UserContext)


    const loggedInView = <>
        <li>
            <NavLink className="nav-link" to="/profile">
                Profile
            </NavLink>
        </li>
        <li>
            {currentUser ?
                <button onClick={logout}> Log Out {currentUser.firstName}   </button> :
                <button onClick={logout}> Log Out   </button>}
        </li>
    </>

    const loggedOutView = <>
        <li>
            <NavLink className="nav-link" to="/signup">
                Signup
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
        </li>
    </>

    return (
        <div>
            <ul>
                <li>
                    <NavLink className="nav-link" to="/jobly">
                        Jobly
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                {currentUser ? loggedInView : loggedOutView}

            </ul>
        </div>
    )
}

export default NavBar;