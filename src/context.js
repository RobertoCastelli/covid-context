import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const ContextProvider = (props) => {
  const [confirmed, setConfirmed] = useState(null);
  const [deaths, setDeaths] = useState(null);
  const [recovered, setRecovered] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("global");
  const [url, setUrl] = useState("https://covid19.mathdro.id/api");

  //--> Change URL to fetch data based on selected Country
  useEffect(() => {
    selectedCountry === "global"
      ? setUrl(`https://covid19.mathdro.id/api`)
      : setUrl(`https://covid19.mathdro.id/api/countries/${selectedCountry}`);
  }, [selectedCountry]);

  //--> FETCH DATA
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

  //--> FETCH COUNTRIES
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
    fetchCountries("https://covid19.mathdro.id/api/countries");
  }, []);

  //--> RENDER
  return (
    <DataContext.Provider
      value={{
        confirmed,
        deaths,
        recovered,
        lastUpdate,
        countries,
        loading,
        selectedCountry,
        setSelectedCountry,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
