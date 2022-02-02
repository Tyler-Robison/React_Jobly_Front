import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import Message from "./Message";
import JoblyApi from "./API";
import jwt from 'jsonwebtoken'
import UserContext from "./context/UserContext";
import useLocalStorage from "./customHooks/useLocalStorage";

const Utility = () => {
    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState(null);
    // const [token, setToken] = useState(null);
    const [token, setToken, clearToken] = useLocalStorage('token')
    const [currentUser, setCurrentUser] = useState(null);
    const [msg, setMsg] = useState(null);

    const displayMsg = (message) => {
        setMsg(message);
    }

    const clearMsg = () => {
        setMsg(null);
    }

    useEffect(() => {
        const loginLogout = async () => {
            if (token && token.length !== 0) {
                const username = jwt.decode(token).username
                // res contains user detail
                const res = await JoblyApi.getUserInfo(username, token)
                setCurrentUser(res.user);
            }
            else {
                setCurrentUser(null)
            }
        }
        loginLogout()
    }, [token])

    const logout = () => setToken(null)
    const login = token => setToken(token)
    
    const providerObj = {currentUser, token}

    return (
        <div>
            {/* <UserContext.Provider value={currentUser}> */}
                <UserContext.Provider value={providerObj}>
                <NavBar logout={logout} />
                <Message msg={msg} />
                <RouteList
                    companies={companies}
                    setCompanies={setCompanies}
                    jobs={jobs}
                    setJobs={setJobs}
                    login={login}
                    displayMsg={displayMsg}
                    clearMsg={clearMsg}
                    setCurrentUser={setCurrentUser}
                />
            </UserContext.Provider>
        </div>


    )
}

export default Utility;