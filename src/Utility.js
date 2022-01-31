import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import NavBar from "./NavBar";

const Utility = () => {
    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const loginLogout = () => {
            if (token) {
                setCurrentUser(token);
            } else {
                setCurrentUser(null);
            }
            console.log('use effect token', token)
        }
        loginLogout()
    }, [token])

    const logout = () => {
        setToken(null)
    }

    const login = (token) => {
        setToken(token)
    }



    return (
        <div>
            <NavBar logout={logout} currentUser={currentUser} />
            <RouteList
                companies={companies}
                setCompanies={setCompanies}
                jobs={jobs}
                setJobs={setJobs}
                token={token}
                login={login}
            />
        </div>


    )
}

export default Utility;