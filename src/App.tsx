import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RideDetail } from "./pages/RideDetail";
import { Rides } from "./pages/Rides";
import { Video } from "./pages/Video";
import backgroundImg from "./assets/purple.png";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/rides" element={<Rides />} />
            <Route path="/video" element={<Video />} />
            <Route path="/rides/:id" element={<RideDetail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        background: `url(${backgroundImg}) repeat center center`,
        backgroundSize: "cover",
        color: "white",
        cursor: "url(/pizza.png), auto",
        fontFamily: "monospace",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};

export default App;
