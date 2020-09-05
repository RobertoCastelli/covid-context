import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Global");

  // const url;
  // country === "Global"
  //   ? (url = "https://covid19.mathdro.id/api")
  //   : (url = `https://covid19.mathdro.id/api/countries/${country}`);

  const url = "https://covid19.mathdro.id/api";

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setConfirmed(data.confirmed.value);
      setDeaths(data.deaths.value);
      setRecovered(data.recovered.value);
      setLastUpdate(data.lastUpdate);
    } catch (error) {
      console.log(`something is wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchCountries = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const countryList = data.countries.map((country) => country.name);
      setCountries(countryList);
    } catch (error) {
      console.log(`something is wrong: ${error}`);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCountries(`${url}/countries`);
  }, [url]);

  return (
    <DataContext.Provider
      value={{ confirmed, deaths, recovered, lastUpdate, countries, loading }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
