import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import Message from "./Message";
import JoblyApi from "./API";
// import jwt from 'jsonwebtoken'
import UserContext from "./context/UserContext";
import useLocalStorage from "./customHooks/useLocalStorage";

const Utility = () => {
    const [companies, setCompanies] = useState(null);
    const [jobs, setJobs] = useState(null);
    // const [token, setToken] = useState(null);
    const [token, setToken, clearToken] = useLocalStorage('token')
    const [currentUser, setCurrentUser] = useState(null);
    const [msg, setMsg] = useState(null);

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    console.log('current user', currentUser)
    console.log('token', token)

    const displayMsg = (message) => {
        setMsg(message);
    }

    const clearMsg = () => {
        setMsg(null);
    }

    useEffect(() => {
        const loginLogout = async () => {
            if (token && token.length !== 0) {
                const username = parseJwt(token).username
                // res contains user detail
                const res = await JoblyApi.getUserInfo(username, token)
                console.log('token res', res)
                setCurrentUser(res.user);
            } 
            else {
                setCurrentUser(null)
            }
            // console.log('use effect token', token)
        }
        loginLogout()
    }, [token])

    // res.user ->
    // applications: []
    // email: "tylerobison758758@gmail.com"
    // firstName: "Tyler"
    // isAdmin: false
    // lastName: "Robison"
    // username: "janet"

    const logout = () => {
        setToken(null)
    }

    const login = (token) => {
        setToken(token)
    }



    return (
        <div>
            <UserContext.Provider value={currentUser}>
                <NavBar logout={logout} token={token} />
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
            </UserContext.Provider>
        </div>


    )
}

export default Utility;