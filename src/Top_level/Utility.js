import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import NavBar from "../Nav/NavBar";
import Message from "./Message";
import JoblyApi from "../API/API";
import jwt from 'jsonwebtoken'
import UserContext from "../context/UserContext";
import useLocalStorage from "../customHooks/useLocalStorage";

const Utility = () => {
    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState(null);
    const [token, setToken] = useLocalStorage('token')
    const [currentUser, setCurrentUser] = useState(null);
    const [msg, setMsg] = useState(null);

    const displayMsg = message => setMsg(message);
    const clearMsg = () => setMsg(null);

    const logout = () => setToken(null);
    const login = token => setToken(token);

    useEffect(() => {
        const loginLogout = async () => {
            if (token && token.length !== 0) {
                const username = jwt.decode(token).username
                // res contains user detail
                const res = await JoblyApi.getUserInfo(username, token)
                console.log('useEff res', res)
                setCurrentUser(res);
            }
            else {
                setCurrentUser(null)
            }
            console.log('about to exit useEffect')
        }
        loginLogout()
        // this second log doesn't fire
        console.log('about to exit useEffect2')
    }, [token])

    const providerObj = { currentUser, token }

    return (
        <div>
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