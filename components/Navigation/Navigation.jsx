import { StyledNavigation, StyledMenuItem } from "./StyledNavigation";
import { KlickMenu } from "../KlickMenu/KilckMenu";
import { navigaion } from "@/service/navigationMap";
import Link from "next/link";

export const Navigation = ({ main }) => {
  return (
    <StyledNavigation component="nav">
      <div className="container">
        <div className="navDiv">
          {main && (
            <Link className="link" href="/">
              На головну
            </Link>
          )}
        </div>
        <ul>
          <li>
            <Link className="link" href="/">
              Новини
            </Link>
          </li>
          <li>
            <KlickMenu buttonText="Про ДЮСШ">
              {navigaion.about.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link href={"/" + item.link}>{item.title}</Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>
          <li>
            <KlickMenu buttonText="Спорт">
              {navigaion.sport.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link href={item.link}>{item.title}</Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>
          <li>
            <KlickMenu buttonText="Інформація для батьків">
              {navigaion.parrentsInfo.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link href={item.link}>{item.title}</Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>
          <li>
            <KlickMenu buttonText="Нормативна база">
              {navigaion.stadarts.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link href={item.link}>{item.title}</Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>
          <li>
            <KlickMenu buttonText="Методично-виховна робота">
              {navigaion.metodWork.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link href={item.link}>{item.title}</Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>

          <li>
            <KlickMenu buttonText="Прозоро">
              {navigaion.prozoro.map((item) => (
                <StyledMenuItem key={item.link}>
                  <Link className="link" href={item.link}>
                    {item.title}
                  </Link>
                </StyledMenuItem>
              ))}
            </KlickMenu>
          </li>
        </ul>
      </div>
    </StyledNavigation>
  );
};
