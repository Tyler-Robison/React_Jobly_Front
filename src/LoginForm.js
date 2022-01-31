import React, { useState } from "react";
import JoblyApi from "./API";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import loginValidate from "./helpers/loginValidate";


const LoginForm = ({ login, displayMsg, clearMsg }) => {
    const validate = loginValidate
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => loginUser(values),
    })
    // const INITIAL_STATE = {
    //     username: '',
    //     password: ''
    // }

    // const [formData, setFormData] = useState(INITIAL_STATE);

    // check what happens when this fails/ works.
    const loginUser = async (values) => {
        try {
            const res = await JoblyApi.login(values)
            login(res.token);
            // res.user -> currentUser
            console.log('user res', res.user)
            clearMsg()
            navigate('/jobly')
        } catch(err) {
            displayMsg('Invalid Username/Password')
        }
        // console.log('login res', res)

        // re-direct on success

    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     loginUser()
    //     setFormData(INITIAL_STATE)
    // }

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData(formData => ({
    //         ...formData, [name]: value
    //     }))
    // }

    return (
        <div>
            <h1>Login Form</h1>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        placeholder="Username"
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div>{formik.errors.username}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Password"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                    )}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;