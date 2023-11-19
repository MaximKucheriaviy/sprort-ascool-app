import Image from "next/image";

export const CoachItem = ({ src, title, subtitle }) => {
  return (
    <li>
      <div className="ImageThumb">
        <Image src={src} alt="coachImage" width={393} height={413} />
      </div>
      <div className="textBox">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </li>
  );
};
