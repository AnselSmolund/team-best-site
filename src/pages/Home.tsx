import React from "react";
import backgroundImg from "../assets/purple.png";
import bestLogo from "../assets/bestlogo.png";

export const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${backgroundImg}) no-repeat center center`,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <img src={bestLogo} height={300} alt="hellpo" />
      <h1 style={{ fontSize: "2rem" }}>website coming soon 😎</h1>
      <a
        style={{ color: "white" }}
        href="https://www.instagram.com/teambest___/"
      >
        instagram
      </a>
      <a style={{ color: "white" }} href="https://www.strava.com/clubs/731394">
        strava
      </a>
      <a style={{ color: "white" }} href="mailto:teambestcyclingclub@gmail.com">
        email
      </a>
    </div>
  );
};
