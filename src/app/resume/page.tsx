"use client";  // Add this to enable client-side functionality

import React from "react";

const ResumePage = () => {
  const handleOpenInNewTab = () => {
    window.open("/Divjot_Singh_Manchanda_Resume_Dec_2024.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ height: "100%", width: "100%", padding: "0rem", position: "relative" }}>
      <iframe
        src="/Divjot_Singh_Manchanda_Resume_Dec_2024.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
        title="Resume Viewer"
      />
      <button
        onClick={handleOpenInNewTab}
        style={{
          position: "absolute",
          top: "12px",
          right: "150px",
          padding: "8px 16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          zIndex: 999,
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        Open in New Tab
      </button>
    </div>
  );
};

export default ResumePage;