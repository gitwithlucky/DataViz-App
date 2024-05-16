import { AvatarProps } from "../helpers";

const Avatar = ({ src, alt }: AvatarProps) => {
  return <img src={src} alt={alt} />;
};

export default Avatar;
