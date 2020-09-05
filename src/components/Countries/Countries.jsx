import React, { useContext } from "react";
import { DataContext } from "../../context";

const Countries = () => {
  const context = useContext(DataContext);
  const { countries, loading, setSelectedCountry } = context;

  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <div>
        {/* GET SELECTED COUNTRY VALUE */}
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          {/* DEFAULT GLOBAL COUNTRY */}
          <option>Choose a Country</option>
          <option value="global data">Global Data</option>
          {/* DISPLAY ALL COUNTRIES IN SELECT MENU */}
          {countries.map((country, id) => {
            return (
              <option key={id} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
};

export default Countries;
