import React, { useContext } from "react";
import { DataContext } from "../context";
import headerImage from "../images/header-image.jpg";

const Header = () => {
  const context = useContext(DataContext);
  const { lastUpdate, loading, selectedCountry } = context;

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <header>
        <img className="header-image" src={headerImage} alt="header-img" />
        <p>
          last update:{" "}
          <span className="header-update">
            {new Date(lastUpdate).toDateString()}
          </span>
        </p>
        <h1 className="header-country">{selectedCountry}</h1>
      </header>
    );
  }
};

export default Header;
