"use client";  // Add this to enable client-side functionality

import React from "react";

const ResumePage = () => {
  // Detect mobile devices with a simple user agent check.
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      { !isMobile ? (
        <iframe
          src="/Divjot_Manchanda_Resume_Nov25.pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
          title="Resume Viewer"
        />
      ) : (
        <object
          data="/Divjot_Manchanda_Resume_Nov25.pdf"
          type="application/pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <p>
            Your device does not support embedded PDFs. Please{" "}
            <a href="/Divjot_Manchanda_Resume_Nov25.pdf">
              download the PDF
            </a>{" "}
            to view it.
          </p>
        </object>
      )}

      <button
        onClick={() =>
          window.open(
            "/Divjot_Manchanda_Resume_Nov25.pdf",
            "_blank",
            "noopener,noreferrer"
          )
        }
        style={{
          position: "absolute",
          top: "12px",
          right: "150px",
          padding: "8px 16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "6px",
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
