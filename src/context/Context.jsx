import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    return <Context.Provider value={{ user }}>
        {children}
    </Context.Provider>
}