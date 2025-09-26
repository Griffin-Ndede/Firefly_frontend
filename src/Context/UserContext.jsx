import { createContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState("Griffin Omondi Ndede")

    return (
        <UserContext.Provider value = {user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext