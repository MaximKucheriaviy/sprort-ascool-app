import { StyledFooter } from "./StyledFooter";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <StyledFooter>
      <ul className="linkset">
        <li>
          <Link href="/">
            <Image
              src="/footerImages/imgshort.jpg"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/footerImages/i2.png"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/footerImages/i3.png"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/footerImages/i4.png"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/footerImages/i5.png"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="/footerImages/i6.png"
              alt="logo"
              width={168}
              height={100}
            />
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
};
