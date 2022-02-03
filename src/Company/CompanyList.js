import React, { useEffect, useState } from "react";
import JoblyApi from "../API/API";
import CompanyCard from "./CompanyCard";
import SearchForm from "../Forms/SearchForm";
import './CompanyList.css'


const CompanyList = ({ companies, setCompanies }) => {
    useEffect(() => {
        const getCompanies = async () => {
            const res = await JoblyApi.getCompanies()
            setCompanies(res)
        }
        getCompanies()
    }, [])

    if (companies) {
        return (
            <div className="CompanyList">
                <h1>CompanyList</h1>
                <SearchForm setCompanies={setCompanies} />
                <div>
                    {companies.map((company) => {
                        return (
                            <CompanyCard
                                key={company.handle}
                                name={company.name}
                                description={company.description}
                                logo={company.logoUrl}
                                handle={company.handle}
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

export default CompanyList;