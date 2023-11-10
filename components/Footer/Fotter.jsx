import { StyledFooter } from "./StyledFooter";
import Image from "next/image";

export const Footer = () => {
  return (
    <StyledFooter>
      <ul className="linkset">
        <li>
          <a href="/">
            <Image
              src="/footerImages/imgshort.jpg"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              src="/footerImages/i2.png"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              src="/footerImages/i3.png"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              src="/footerImages/i4.png"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              src="/footerImages/i5.png"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <Image
              src="/footerImages/i6.png"
              alt="logo"
              width={168}
              height={100}
            />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};
