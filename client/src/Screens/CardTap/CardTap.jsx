import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";
import { BottomNav } from "./tap/BottomNav/BottomNav";
import { ScrollArea } from "./tap/ScrollArea";
import { StaticImage } from "./tap/StaticImage";

const CardTap = () => {
    const {setShowNav} = useAuth(); 
    const {id} = useParams(); 
    console.log(id)
    if(id){
        setShowNav(false)
    }
    const {business} = useAuth();  
    return (
        <>
            <StaticImage statImg = {business? business.pics[0] : null}/>
            <ScrollArea />
            <BottomNav />
        </>
    
)};

export {CardTap}; 