import React from "react";
import backgroundImg from "../assets/purple.png";
import bestLogo from "../assets/bestlogo.png";
import duke from "../assets/duke.png";
import { Links } from "../components/Links";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [dukeHeight, setDukeHeight] = React.useState(200);
  const [dukeRotation, setDukeRotation] = React.useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/video");
  };

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
          onClick={() => setDukeHeight(dukeHeight + 10)}
          style={{ height: 200, width: "auto", objectFit: "cover" }}
          alt="hellpo"
        />
        <img
          src={duke}
          style={{
            height: dukeHeight,
            width: "auto",
            objectFit: "cover",
            transform: `rotate(${dukeRotation}deg)`,
          }}
          alt="duke"
          onClick={() => setDukeRotation(dukeRotation + 20)}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "1.5rem" }}>website coming soon 😎</h2>
        <p
          onClick={handleClick}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          clicky for fun video
        </p>
        <Links />
      </div>
    </div>
  );
};
