import React, { useState, useContext, useEffect } from "react";
import './Styles/JobCard.css'
import JoblyApi from "./API";
import UserContext from "./context/UserContext";


const JobCard = ({ companyHandle, companyName, equity, jobId, salary, title }) => {

    const [haveApplied, setHaveApplied] = useState(false)
    const { currentUser, token } = useContext(UserContext)



    useEffect(() => {
        const checkApplicationStatus = () => {
            if (currentUser.applications.includes(jobId)) {
                setHaveApplied(true)
            } else {
                setHaveApplied(false);
            }
        }
        checkApplicationStatus()
    }, [])

    // username, jobId, token
    const applyToJob = async () => {
        try {
            const res = await JoblyApi.applyToJob(currentUser.username, jobId, token)
            setHaveApplied(true)
        } catch (err) {
            console.log('Application failed')
        }
    }

    const removeApplication = async () => {
        try {
            const res = await JoblyApi.removeApplication(currentUser.username, jobId, token)
            setHaveApplied(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleApplicationClick = () => {
        haveApplied ? removeApplication() : applyToJob();
    }

    return (
        <div className="JobCard">
            <p><b>{title}</b></p>
            <p>{companyName}</p>
            <p><b>Salary: </b>{salary}</p>
            <p><b>Equity:</b> {equity || 'None Given'}</p>
            <button
                className="Apply-Button"
                onClick={handleApplicationClick}
            >{haveApplied ? 'Remove Application' : 'Apply'}</button>
        </div>
    )
}

export default JobCard;