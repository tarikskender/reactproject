import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#f6a5c0" : "#90caf9",
      },
      secondary: {
        main: mode === "light" ? "#bde0fe" : "#f48fb1",
      },
      background: {
        default: mode === "light" ? "#fafafa" : "#121212",
      },
    },
    typography: {
      fontFamily: '"Arial", sans-serif',
    },
  });
