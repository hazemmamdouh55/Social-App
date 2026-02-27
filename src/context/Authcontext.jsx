import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"
export const Authcontext = createContext()
export default function AuthProvider({ children }) {
    const [userToken, setuserToken] = useState(() => localStorage.getItem('userToken'))

    function SaveUserToken(token) {
        setuserToken(token)
        localStorage.setItem('userToken', token)
    }
    function removeUserToken() {
        setuserToken(null)
        localStorage.removeItem("userToken")
    }
    const [userId, setuserId] = useState("second")
    useEffect(() => {
        if (userToken) {

            const decoded = jwtDecode(userToken)
            setuserId(decoded.user)
        }

    }, [userToken]);

    return <>
        <Authcontext.Provider value={{ userToken, SaveUserToken, removeUserToken, userId }}>
            {children}
        </Authcontext.Provider>


    </>
}