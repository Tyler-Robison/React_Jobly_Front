import React, { useState } from "react";
import JoblyApi from "./API";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ login }) => {

    const navigate = useNavigate();

    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    // check what happens when this fails/ works.
    const loginUser = async () => {
        const res = await JoblyApi.login(formData)
        login(res.token);
        // re-direct on success
        navigate('/jobly')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    return (
        <div>
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type='text'
                        onChange={handleChange}
                        value={formData.username}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type='text'
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;