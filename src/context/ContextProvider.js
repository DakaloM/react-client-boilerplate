import React, { createContext, useContext, useState} from 'react'

const StateContext = createContext();

const initialState = {
    currentUser: null,
    
}

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
        )

    const setCurrentUser = (user) => {
        const savedUser = {...user}
        localStorage.setItem('user', JSON.stringify(savedUser));
        setUser(savedUser);
    }

    

    return (
        <StateContext.Provider value = {
            {user, setUser, setCurrentUser}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)