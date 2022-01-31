import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import ProfileForm from "./ProfileForm";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const RouteList = ({
    companies,
    setCompanies,
    jobs,
    setJobs,
    login,
    displayMsg,
    clearMsg }) => {


    return (
        <Routes>
            <Route path="/jobly" element={<Home />} />
            <Route path="/companies" element={<CompanyList companies={companies} setCompanies={setCompanies} />} />
            <Route path="/companies/:handle" element={<CompanyDetails />} />
            <Route path="/jobs" element={<JobList jobs={jobs} setJobs={setJobs} />} />
            <Route path="/profile" element={<ProfileForm displayMsg={displayMsg} clearMsg={clearMsg} />} />
            <Route path="/signup" element={<SignupForm login={login} displayMsg={displayMsg} clearMsg={clearMsg} />} />
            <Route path="/login" element={<LoginForm login={login} displayMsg={displayMsg} clearMsg={clearMsg} />} />
            <Route path="/" element={<Navigate replace to="/jobly" />} />
            <Route path='*' element={<Navigate replace to="/jobly" />} />
        </Routes>
    )
}

export default RouteList;