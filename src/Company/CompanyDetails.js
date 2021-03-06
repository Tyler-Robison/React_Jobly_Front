import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "../API/API";
import JobCard from "../Job/JobCard";
import './CompanyDetails.css'

const CompanyDetails = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null)

    useEffect(() => {
        const getDetails = async () => {
            const res = await JoblyApi.getCompany(handle)
            setCompany(res)
        }
        getDetails()
    }, [])

    if (!company) return <p>Loading...</p>

    return (
        <div className="CompanyDetails">
            <div className="CompanyDetails-Header">
                <h1>{company.handle}</h1>
                <h3>{company.description}</h3>
            </div>
            {company.jobs.map(job => {
                return <JobCard
                    title={job.title}
                    equity={job.equity}
                    salary={job.salary}
                    key={job.id}
                    jobId={job.id}
                />
            })}
        </div>
    )

}

export default CompanyDetails;