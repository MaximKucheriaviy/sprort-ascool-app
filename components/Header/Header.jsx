import { StyledHeader } from "./HeaderStyled";
import Image from "next/image";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Image priority src="/logo.png" width="121" height="56" alt="Logo" />
      </div>
      <div className="iconSet">
        <Image src="/swim.svg" width={60} height={18} alt="icon" />
        <Image src="/basket.svg" width={62} height={56} alt="icon" />
        <Image src="/fight.svg" width={62} height={29} alt="icon" />
        <Image src="/sword.svg" width={62} height={51} alt="icon" />
        <Image src="/shtanga.svg" width={62} height={46} alt="icon" />
        <Image src="/vol.svg" width={62} height={50} alt="icon" />
      </div>
    </StyledHeader>
  );
};
