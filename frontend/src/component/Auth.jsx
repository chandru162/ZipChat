import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export default function AuthProvider(props) {
    const [username, setusername] = useState('')
    const [mobilenumber, setmobilenumber] = useState('')


    const login = (username,mobilenumber) => {
        setusername(username)
        setmobilenumber(mobilenumber)

    }

    const logout = () => {
        setusername('')
        setmobilenumber('')
    }

    return (
        <AuthContext.Provider value={{username,mobilenumber,login,logout }}>
            {props.children}
        </AuthContext.Provider>

    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}