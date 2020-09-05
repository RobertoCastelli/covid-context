import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [countries, setCountries] = useState("Global");

  const url = "https://covid19.mathdro.id/api";

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setConfirmed(data.confirmed.value);
      setDeaths(data.deaths.value);
      setRecovered(data.recovered.value);
      setLastUpdate(data.lastUpdate);
      setCountries(data.countries);
    } catch (error) {
      console.log(`something is wrong: ${error}`);
    } finally {
      console.log("finally");
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <DataContext.Provider
      value={{ confirmed, deaths, recovered, lastUpdate, countries }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
