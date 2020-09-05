import React, { useContext } from "react";
import { DataContext } from "../../context";

const Countries = ({ countryChange }) => {
  const context = useContext(DataContext);
  const { countries } = context;

  return (
    <div>
      <select onChange={(e) => countryChange(e.target.value)}>
        <option value="global">Global</option>
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
};

export default Countries;
