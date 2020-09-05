import React, { useContext } from "react";
import { DataContext } from "../../context";

const Countries = () => {
  const context = useContext(DataContext);
  const { countries, loading, setSelectedCountry } = context;

  //--> Render
  if (loading) {
    return <div className="loading"></div>;
  } else {
    return (
      <div>
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          <option>Choose a Country</option>
          <option value="global data">Global Data</option>
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
