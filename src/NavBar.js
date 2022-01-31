import React from "react";
import { NavLink } from "react-router-dom";
import './Styles/NavBar.css'

const NavBar = ({ logout, currentUser }) => {

    const loggedInView = <>
        <li>
            <NavLink className="nav-link" to="/profile">
                Profile
            </NavLink>
        </li>
        <li>
            <button onClick={logout}> Log Out </button>
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
            {/* debugging purposes only */}
            <h2>currentUser: {currentUser}</h2>
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

// {currentUser &&
//     <li>
//         <NavLink className="nav-link" to="/profile">
//             Profile
//         </NavLink>
//     </li> &&
//     <li>
//         <button onClick={logout}> Log Out </button>
//     </li>
// }

// {!currentUser &&
//     <li>
//         <NavLink className="nav-link" to="/signup">
//             Signup
//         </NavLink>
//     </li> &&
//     <li>
//         <NavLink className="nav-link" to="/login">
//             Login
//         </NavLink>
//     </li>}