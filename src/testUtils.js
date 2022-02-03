import React from "react";
import UserContext from "./context/UserContext";

const demoUser = {
    applications: [97],
    email: "Janet@gmail.com",
    firstName: "Janet",
    isAdmin: false,
    lastName: "Outlaw",
    username: "janet"
};

const UserProvider =
    ({ children, currentUser = demoUser, token='fake token' }) => (
    <UserContext.Provider value={{ currentUser, token }}>
      {children}
    </UserContext.Provider>
);

export default UserProvider;