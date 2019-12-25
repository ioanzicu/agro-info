import React from "react";
import logoUrl from "../images/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="m-3">
      <img src={logoUrl} width="100px" height="100px" alt="logo" />
    </div>
  );
};

export default Logo;
