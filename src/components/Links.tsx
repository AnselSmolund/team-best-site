import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import { ReactComponent as StravaIcon } from "../assets/strava.svg";

export const Links = () => {
  const linkStyle: React.CSSProperties = {
    display: "flex",
    fontSize: "24px",
    color: "white",
    textDecoration: "none",
    textAlign: "center",
    transition: "color 0.3s, transform 0.3s",
    position: "relative",
    zIndex: 1,
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "10px auto",
    width: "fit-content",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  const handleMouseEnter = (e: any) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e: any) => {
    e.target.style.color = "white";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <a
        style={linkStyle}
        href="https://www.instagram.com/teambest___/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <InstagramIcon style={{ fontSize: "30px" }} />
      </a>
      <a
        style={linkStyle}
        href="https://www.strava.com/clubs/731394"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StravaIcon style={{ fill: "white", height: 30 }} />
      </a>
      <a
        style={linkStyle}
        href="mailto:teambestcyclingclub@gmail.com"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <EmailIcon style={{ fontSize: "30px" }} />
      </a>
    </div>
  );
};
