import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import CompanyDetails from "../Company/CompanyDetails";
import CompanyList from "../Company/CompanyList";
import JobList from "../Job/JobList";
import ProfileForm from "../Forms/ProfileForm";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import RequireAuth from "./RequireAuth";

const RouteList = ({
    companies,
    setCompanies,
    jobs,
    setJobs,
    login,
    displayMsg,
    clearMsg,
    setCurrentUser }) => {


    return (
        <Routes>
            <Route path="/jobly" element={<Home />} />

            <Route path="/companies"
                element={<RequireAuth redirectTo="/login"><CompanyList companies={companies} setCompanies={setCompanies} /></RequireAuth>} />


            <Route path="/companies/:handle"
                element={<RequireAuth redirectTo="/login"><CompanyDetails /></RequireAuth>} />


            <Route path="/jobs"
                element={<RequireAuth redirectTo="/login"><JobList jobs={jobs} setJobs={setJobs} /></RequireAuth>} />


            <Route path="/profile"
                element={<RequireAuth redirectTo="/login"><ProfileForm displayMsg={displayMsg} setCurrentUser={setCurrentUser}/></RequireAuth>} />

            <Route path="/signup" element={<SignupForm login={login} displayMsg={displayMsg} clearMsg={clearMsg} />} />
            <Route path="/login" element={<LoginForm login={login} displayMsg={displayMsg} clearMsg={clearMsg} />} />
            <Route path="/" element={<Navigate replace to="/jobly" />} />
            <Route path='*' element={<Navigate replace to="/jobly" />} />
        </Routes>
    )
}

export default RouteList;