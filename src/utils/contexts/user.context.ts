import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    setUserName: (name: string) => {}
});

export default UserContext;