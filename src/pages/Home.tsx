import React from "react";
import backgroundImg from "../assets/purple.png";
import bestLogo from "../assets/bestlogo.png";
import duke from "../assets/duke.png";
import { Links } from "../components/Links";

export const Home: React.FC = () => {
  const [dukeHeight, setDukeHeight] = React.useState(200);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 50,
        alignItems: "center",
        height: "100vh",
        background: `url(${backgroundImg}) no-repeat center center`,
        backgroundSize: "cover",
        color: "white",
        cursor: "url(/pizza.png), auto",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img
          src={bestLogo}
          style={{ height: 200, width: "auto", objectFit: "cover" }}
          alt="hellpo"
        />
        <img
          src={duke}
          style={{ height: dukeHeight, width: "auto", objectFit: "cover" }}
          alt="duke"
          onClick={() => setDukeHeight(dukeHeight + 10)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 40 }}>
        <h1 style={{ fontSize: "1.5rem" }}>website coming soon 😎</h1>
        <Links />
      </div>
    </div>
  );
};
