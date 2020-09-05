import React from "react";
import Header from "./components/Header";
import ContextProvider from "./context";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";
import Charts from "./components/Charts/Charts";

function App() {
  return (
    <div className="container">
      <div className="content">
        <ContextProvider>
          <Header />
          <Countries />
          <Cards />
          <Charts />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
