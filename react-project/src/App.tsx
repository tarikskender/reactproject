import React, { useState } from "react";
import { CssBaseline, ThemeProvider, Button } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import SecondPage from "./SecondPage";
import ContactForm from "./ContactForm";
import ThirdPage from "./ThirdPage";
import Navbar from "./Navbar";
import { getTheme } from "./theme";
import About from "./About";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Posts from "./Posts";

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const theme = getTheme(themeMode);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/success" element={<ThirdPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Button
          onClick={toggleTheme}
          style={{ position: "fixed", bottom: 20, right: 20 }}
        >
          Toggle Theme
        </Button>
      </Router>
    </ThemeProvider>
  );
};

export default App;
