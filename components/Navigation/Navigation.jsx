import { StyledNavigation } from "./StyledNavigation";
import { KlickMenu } from "../KlickMenu/KilckMenu";
import { MenuItem } from "@mui/material";

export const Navigation = () => {
  return (
    <StyledNavigation component="nav">
      <ul>
        <li>
          <KlickMenu buttonText="Про ДЮСШ">
            <MenuItem>Про ДЮСШ</MenuItem>
          </KlickMenu>
        </li>
        <li>
          <KlickMenu buttonText="Нормативна база">
            <MenuItem>Про ДЮСШ</MenuItem>
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
