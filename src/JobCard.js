import React from "react";

const JobCard = ({companyHandle, companyName, equity, id, salary, title}) => {


    return (
        <div>
            <p>{title}</p>
            <p>{companyName}</p>
            <p>Salary: {salary}</p>
            <p>Equity: {equity || 'None Given'}</p>
        </div>
    )
}

export default JobCard;

{/* <JobCard 
companyHandle = {job.companyHandle}
companyName = {job.companyName}
equity = {job.equity}
key={job.id}
id={job.id}
salary={job.salary}
title={job.title}
/> */}