import { createTheme } from "@mui/material";

export const mainTheme = createTheme();
mainTheme.palette.headerColor = mainTheme.palette.augmentColor({
  color: {
    main: "#050F64",
  },
  name: "headerColor",
});

mainTheme.palette.herroColor = mainTheme.palette.augmentColor({
  color: {
    main: "#0B4283",
  },
  name: "herroColor",
});

mainTheme.palette.white = mainTheme.palette.augmentColor({
  color: {
    main: "#ffffff",
  },
  name: "white",
});
