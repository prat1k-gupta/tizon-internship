import "./StaticImage.css";
import { Parallax } from "react-parallax";
import { ScrollArea } from "./ScrollArea";
const bg = "https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/classic.jpg";

const StaticImage = () => (
    <Parallax className="image" bgImage={bg} bgImageAlt="the cat" strength={200}>
        <ScrollArea />
    </Parallax>
);

export { StaticImage }; 