import React, { useEffect } from "react";
import JoblyApi from "../API/API";
import SearchForm from "../Forms/SearchForm";
import JobCard from "./JobCard";
import './JobList.css'

const JobList = ({ setJobs, jobs }) => {

    useEffect(() => {
        const getJobs = async () => {
            const res = await JoblyApi.getJobs()
            setJobs(res)
        }
        getJobs()
    }, [])

    if (jobs) {
        return (
            <div className="JobList">
                <h1>JobList</h1>
                <SearchForm setJobs={setJobs} />
                <div>
                    {jobs.map((job) => {
                        return (
                          <JobCard 
                          companyHandle = {job.companyHandle}
                          companyName = {job.companyName}
                          equity = {job.equity}
                          key={job.id}
                          jobId={job.id}
                          salary={job.salary}
                          title={job.title}
                          />

                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            // replace w/ loading spinner component
            <h1>Loading...</h1>
        )
    }
}

export default JobList;