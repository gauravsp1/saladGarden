import React from "react";

function SectionHeader({ heading, children }) {
  return (
    <>
      <div className="section-container">
        <div className="feature">
          <h2>{heading}</h2>
        </div>
      </div>
      {children}
    </>
  );
}

export default SectionHeader;
