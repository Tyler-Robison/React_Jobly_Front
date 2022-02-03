import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import UserContext from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container } from "react-bootstrap";
import { Button } from "@material-ui/core";

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
            <Button onClick={logout} variant="contained" color="primary"> Log Out {currentUser.firstName}</Button> :
            <Button onClick={logout}> Log Out   </Button>}

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
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="jobly">Jobly</Navbar.Brand>

                {currentUser ? loggedInView : loggedOutView}

            </Container>
        </Navbar>
    )
}

export default NavBar;
