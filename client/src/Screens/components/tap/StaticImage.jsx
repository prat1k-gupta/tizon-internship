import "./StaticImage.css";
import { Parallax } from "react-parallax";
const bg = "https://assets.materialup.com/uploads/c59092ae-0d48-499d-9959-6d96acd73c62/preview.png";

const StaticImage = () => (
    <Parallax className="image" bgImage={bg} bgImageAlt="the cat" strength={400}>
    </Parallax>
);

export { StaticImage }; 