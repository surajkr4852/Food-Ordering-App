import { createContext } from "react";

//This is a context
const UserContext=createContext({
    loggedInUser:"Default User",
})

export default UserContext;