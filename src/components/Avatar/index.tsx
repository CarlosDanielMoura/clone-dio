import { PictureAvatar } from "./styles";
import { IAvatar } from "./type";

const Avatar = ({ src, alt }: IAvatar) => {
    return <PictureAvatar src={src} alt={alt} />;
};

export default Avatar;
