import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import UserContext from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavBar = ({ logout }) => {

    const { currentUser } = useContext(UserContext)

    const loggedInView = <>

        <NavLink className="nav-link" to="/companies">
            Companies
        </NavLink>


        <NavLink className="nav-link" to="/jobs">
            Jobs
        </NavLink>

        <NavLink className="nav-link" to="/profile">
            Profile
        </NavLink>

        {currentUser ?
            <button onClick={logout}> Log Out {currentUser.firstName}   </button> :
            <button onClick={logout}> Log Out   </button>}

    </>

    const loggedOutView = <>

        <NavLink className="nav-link" to="/signup">
            Signup
        </NavLink>

        <NavLink className="nav-link" to="/login">
            Login
        </NavLink>

    </>

    return (
        <div>

            {/* <Navbar bg="dark">
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/jobly">
                        Jobly
                    </NavLink>
                </Navbar.Brand>

                {currentUser ? loggedInView : loggedOutView}

            </Navbar> */}

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="jobly">Jobly</Navbar.Brand>


                    {currentUser ? loggedInView : loggedOutView}


                </Container>
            </Navbar>






        </div>
    )
}

export default NavBar;

// {/* <Box sx={{ flexGrow: 1 }}>
// <AppBar position="static">
//     <Toolbar>
//         <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//         >
//             {/* <MenuIcon /> */}
//         </IconButton>
//         <NavLink className="nav-link" to="/jobly">
//             Jobly
//         </NavLink>
//         <Button color="inherit">Login</Button>
//     </Toolbar>
// </AppBar>
// </Box> */}

