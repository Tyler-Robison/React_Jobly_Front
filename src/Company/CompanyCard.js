import React from "react"
import { useNavigate } from 'react-router-dom';
import './CompanyCard.css'

const CompanyCard = ({ name, description, logo, handle }) => {
    const navigate = useNavigate();
    const getDetails = () => navigate(`/companies/${handle}`)
    
    return (
        <div className="CompanyCard" onClick={getDetails}>
            <p>{name}</p>
            <p>{description}</p>
            {logo &&
                <img src={logo}></img>}
        </div>
    )
}

export default CompanyCard;