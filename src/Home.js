import React, {useContext} from "react";
import UserContext from "./context/UserContext";

const Home = () => {

    const currentUser = useContext(UserContext)

    return (
        <>
            <h1>Jobly</h1>
            <h3>All the jobs in one convenient place</h3>
            {currentUser ? <h2>Welcome Back, {currentUser.firstName}</h2> : <p></p>}
        </>
    )
}

export default Home;