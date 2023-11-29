import Image from "next/image";
import { PhotoListItem } from "@/components/StyiledComponents/PhotoListItem";

export const CoachItem = ({ src, title, subtitle }) => {
  return (
    <PhotoListItem>
      <div className="ImageThumb">
        <Image src={src} alt="coachImage" width={393} height={413} />
      </div>
      <div className="textBox">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </PhotoListItem>
  );
};
