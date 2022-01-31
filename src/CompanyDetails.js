import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import JoblyApi from "./API";
import JobCard from "./JobCard";

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

    // company.jobs contains all jobs at company
    if (company) {
        console.log('comp test', company)
    return (
        <div>
            <h1>{company.handle}</h1>
            <h3>{company.description}</h3>
            {company.jobs.map(job => {
                return <JobCard 
                title={job.title}
                equity={job.equity}
                salary={job.salary}
                key={job.id}
                />
            })}
        </div>
    )
    } else {
        return (
            <p>Loading...</p>
        )
    }
}

export default CompanyDetails;