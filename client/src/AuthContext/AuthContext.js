import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    auth: null,
    setAuth: ()=> {},
    user: null
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null); 
    const [auth,setAuth] = useState(null); 
    useEffect(()=>{
        const data = localStorage.getItem("isAuthenticated")
        if(data){
            setAuth(data); 
        }
    },[])

    useEffect(()=>{
        console.log(auth)
        localStorage.setItem("isAuthenticated",auth); 
    },[auth])

    const isAuth = async ()=>{
        try{
            const res = await axios.get('/api/authorized'); 
            if(res){
                setUser(res.data); 
                setAuth(true)
            }
        }catch(err){
            setUser(null); 
            setAuth(false);
        }
    }
    useEffect(()=>{
        isAuth(); 
    },[auth])

    return (
        <AuthContext.Provider value={{auth,setAuth,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
