import React from "react";
import bestLogo from "../assets/bestlogo.png";
import duke from "../assets/duke.png";
import { Links } from "../components/Links";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [dukeHeight, setDukeHeight] = React.useState(200);
  const [dukeRotation, setDukeRotation] = React.useState(0);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "1.5rem" }}>website coming soon 😎</h2>
        <p
          onClick={() => navigate("/video")}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          clicky for fun video
        </p>

        <p
          onClick={() => navigate("/rides")}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          see some rides
        </p>
        <Links />
      </div>
    </div>
  );
};
