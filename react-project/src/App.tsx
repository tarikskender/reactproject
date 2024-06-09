import React, { useState } from "react";
import { CssBaseline, ThemeProvider, Button } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SecondPage from "./SecondPage";
import ContactForm from "./ContactForm";
import { getTheme } from "./theme";

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const theme = getTheme(themeMode);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Router>
    </ThemeProvider>
  );
};

export default App;
