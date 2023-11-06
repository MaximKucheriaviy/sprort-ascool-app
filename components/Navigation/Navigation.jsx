import { StyledNavigation } from "./StyledNavigation";
import { KlickMenu } from "../KlickMenu/KilckMenu";
import { MenuItem } from "@mui/material";
import { navigaion } from "@/service/navigationMap";
import Link from "next/link";

export const Navigation = () => {
  return (
    <StyledNavigation component="nav">
      <ul>
        <li>
          <KlickMenu buttonText="Про ДЮСШ">
            {navigaion.about.map((item) => (
              <MenuItem key={item.link}>
                <Link href={item.link}>{item.title}</Link>
              </MenuItem>
            ))}
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Нормативна база">
            {navigaion.stadarts.map((item) => (
              <MenuItem key={item.link}>
                <Link href={item.link}>{item.title}</Link>
              </MenuItem>
            ))}
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Спорт">
            <MenuItem>Про ДЮСШ</MenuItem>
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Інформація для батьків">
            <MenuItem>Про ДЮСШ</MenuItem>
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Методико-виховна робота">
            <MenuItem>Про ДЮСШ</MenuItem>
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Прозоро">
            <MenuItem>Про ДЮСШ</MenuItem>
          </KlickMenu>
        </li>
      </ul>
    </StyledNavigation>
  );
};
