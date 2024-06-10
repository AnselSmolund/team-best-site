import React from "react";
import backgroundImg from "../assets/purple.png";

export const Video = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${backgroundImg}) no-repeat center center`,
      }}
    >
      <video width="80%" height="auto" controls autoPlay>
        <source src="/fun.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
