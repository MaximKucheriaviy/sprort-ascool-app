import "@/styles/globals.css";

import { ThemeProvider } from "@mui/material";
import { mainTheme } from "@/theme/mainTheme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
