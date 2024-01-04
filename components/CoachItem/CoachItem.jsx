import Image from "next/image";
import { PhotoListItem } from "@/components/StyiledComponents/PhotoListItem";

export const CoachItem = ({ src, title, subtitle, category, sport }) => {
  return (
    <PhotoListItem>
      <div className="ImageThumb">
        <Image src={src} alt="coachImage" width={393} height={413} />
      </div>
      <div className="textBox">
        <h3>{title}</h3>
        <p>{sport}</p>
        <p>{subtitle}</p>
      </div>
    </PhotoListItem>
  );
};
