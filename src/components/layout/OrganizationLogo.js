import React from "react";

export default function OrganizationLogo({ src }) {
  return (
    <div className="navbar__logo">
      <img
        alt="Organization logo"
        src={src}
      />
    </div>
  );
}
