import "./StaticImage.css";
import { Parallax } from "react-parallax";
const bg = "https://media.discordapp.net/attachments/1009724495344435200/1017017815179460618/Default-Banner.png";

const StaticImage = ({statImg}) => (
    <Parallax className="image" bgImage={statImg? statImg : bg} bgImageAlt="" strength={300}>
    </Parallax>
);

export { StaticImage }; 