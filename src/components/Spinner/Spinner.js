import * as React from "react";

export const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ position: "absolute", top: "50%", padding: "60px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
