import { useAuth } from "../../AuthContext/AuthContext";
import { BottomNav } from "../components/tap/BottomNav/BottomNav";
import { ScrollArea } from "../components/tap/ScrollArea";
import { StaticImage } from "../components/tap/StaticImage";

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