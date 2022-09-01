import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    auth: null,
    setAuth: ()=> {},
    user: null,
    business: null,
    setBusiness: ()=>{}
})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null); 
    const [auth,setAuth] = useState(null); 
    const [business,setBusiness] = useState(null); 
    // useEffect(()=>{
    //     const data = localStorage.getItem("isAuthenticated")
    //     if(data){
    //         setAuth(data); 
    //     }
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem("isAuthenticated",auth); 
    // },[auth])
    // const businessExist =async ()=>{
    //     try{
    //         const res = await axios.get('/api/business',{withCredentials: true}); 
    //         if(res){
    //             setBusiness(true); 
    //         }else{
    //             setBusiness(false); 
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    const isAuth = async ()=>{
        try{
            const res = await axios.get('/api/authorized'); 
            if(res){
                setUser(res.data); 
                setAuth(true)
                setBusiness(res.data.business)
            }
        }catch(err){
            setUser(null); 
            setAuth(false);
        }
    }
    useEffect(()=>{
        // businessExist(); 
        isAuth(); 
    },[auth])

    return (
        <AuthContext.Provider value={{auth,setAuth,user,business,setBusiness}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider; 
