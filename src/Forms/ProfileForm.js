import React, { useContext } from "react";
import JoblyApi from "../API/API";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import profileValidate from "../helpers/profileValidate";
import UserContext from "../context/UserContext";


const ProfileForm = ({ displayMsg, setCurrentUser }) => {

    const { currentUser, token } = useContext(UserContext)
    const validate = profileValidate
    const navigate = useNavigate();
    // console.log(currentUser)

    let initialValues = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: ''
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => editProfile(values),
    })

    const editProfile = async (values) => {
        try {
            const res = await JoblyApi.editUser(currentUser.username, values, token)

            initialValues = formik.values
            initialValues.password = ''
            formik.resetForm({
                values: initialValues
            })

            displayMsg('Profile Updated');
            setCurrentUser({...currentUser,  ...res.user})
        } catch (err) {
            displayMsg('Invalid Profile Edit');
        }
    }


    return (
        <div>
            <h1>Profile Edit Form</h1>

            <div>
                <p><b>Username:</b> {currentUser.username}</p>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder={currentUser.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                        <div>{formik.errors.firstName}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        placeholder={currentUser.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                        <div>{formik.errors.lastName}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder={currentUser.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div>{formik.errors.email}</div>
                    )}
                </div>
                <div>
                    <label htmlFor="password">Confirm password to make changes:</label>
                    <input
                        id="password"
                        name="password"
                        type='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div>{formik.errors.password}</div>
                    )}
                </div>

                <button type="submit">Edit Profile</button>
            </form>
        </div>
    )
}


export default ProfileForm;