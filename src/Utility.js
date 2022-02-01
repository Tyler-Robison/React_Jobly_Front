import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import Message from "./Message";
import JoblyApi from "./API";
import jwt from 'jsonwebtoken'

const Utility = () => {
    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [msg, setMsg] = useState(null);

    const displayMsg = (message) => {
        setMsg(message);
    }

    const clearMsg = () => {
        setMsg(null);
    }

    useEffect(() => {
        const loginLogout = () => {
            if (token) {
                const { user } = jwt.decode(token)
                console.log('jwt user', user)
                setCurrentUser(token);
            } else {
                setCurrentUser(null);
            }
            // console.log('use effect token', token)
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
            <Message msg={msg} />
            <RouteList
                companies={companies}
                setCompanies={setCompanies}
                jobs={jobs}
                setJobs={setJobs}
                token={token}
                login={login}
                displayMsg={displayMsg}
                clearMsg={clearMsg}
            />
        </div>


    )
}

export default Utility;