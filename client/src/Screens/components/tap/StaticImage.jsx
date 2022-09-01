import "./StaticImage.css";
import { Parallax } from "react-parallax";
const bg = "https://assets.materialup.com/uploads/c59092ae-0d48-499d-9959-6d96acd73c62/preview.png";

const StaticImage = ({statImg}) => (
    <Parallax className="image" bgImage={statImg? statImg : bg} bgImageAlt="the cat" strength={300}>
    </Parallax>
);

export { StaticImage }; 