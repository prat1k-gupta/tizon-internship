import { useAuth } from "../../AuthContext/AuthContext";
import { BottomNav } from "./tap/BottomNav/BottomNav";
import { ScrollArea } from "./tap/ScrollArea";
import { StaticImage } from "./tap/StaticImage";

const CardTap = () => {
    const {business} = useAuth();  
    return (
        <>
            <StaticImage statImg = {business? business.pics[0] : null}/>
            <ScrollArea />
            <BottomNav />
        </>
    
)};

export {CardTap}; 