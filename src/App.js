import React from "react";
import Header from "./components/Header";
import ContextProvider from "./context";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="container">
      <div className="content">
        <ContextProvider>
          <Header />
          <Cards />
          <Countries />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
