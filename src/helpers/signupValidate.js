const signupValidate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Username Required';
    } else if (values.username.length > 25) {
        errors.username = 'username be 25 characters or less';
    }

    if (!values.password) {
        errors.password = 'Password Required';
    } else if (values.password.length > 30) {
        errors.password = 'Password be between 5 to 30 characters';
    } else if (values.password.length < 5) {
        errors.password = 'Password be between 5 to 30 characters';
    }

    if (!values.firstName) {
        errors.firstName = 'First Name Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name Required';
    }

    if (!values.email) {
        errors.email = 'E-mail Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } else if (values.email.length > 60) {
        errors.email = 'Max 60 characters';
    }

    return errors;
};

export default signupValidate