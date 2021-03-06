import React, { useContext } from "react";
import { DataContext } from "../context";
import headerImage from "../images/header-image.jpg";

const Header = () => {
  const context = useContext(DataContext);
  const { lastUpdate, loading } = context;

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <header>
        <img className="header-image" src={headerImage} alt="header-img" />
        <p>
          last update:{" "}
          <span className="header-update">
            {/* FETCH DATE UPDATED */}
            {new Date(lastUpdate).toDateString()}
          </span>
        </p>
      </header>
    );
  }
};

export default Header;
