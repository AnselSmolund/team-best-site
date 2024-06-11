import React from "react";

export const Video = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <video width="80%" height="auto" controls autoPlay>
        <source src="/fun.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
