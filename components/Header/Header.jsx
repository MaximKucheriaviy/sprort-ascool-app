import { StyledHeader } from "./HeaderStyled";
import Image from "next/image";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Image src="/logo.png" width="121" height="56" alt="Logo" />
      </div>
      <div className="iconSet">
        <Image src="/swim.svg" width={60} height={18} />
        <Image src="/basket.svg" width={62} height={56} />
        <Image src="/fight.svg" width={62} height={29} />
        <Image src="/sword.svg" width={62} height={51} />
        <Image src="/shtanga.svg" width={62} height={46} />
        <Image src="/vol.svg" width={62} height={50} />
      </div>
    </StyledHeader>
  );
};
