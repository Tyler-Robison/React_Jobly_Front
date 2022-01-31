import React, { useState } from "react";
import JoblyApi from "./API";

const SignupForm = ({ login }) => {

    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    // check what happens when this fails/ works.
    // login sets token, which triggers useEffect
    const signup = async () => {
        const res = await JoblyApi.register(formData)
        login(res.token);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup()
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
            <h1>SignupForm</h1>

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
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type='text'
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type='text'
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type='text'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <button>Sign-up</button>
            </form>
        </div>
    )
}

export default SignupForm;