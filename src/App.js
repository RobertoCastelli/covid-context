import React from "react";
import Header from "./components/Header";
import ContextProvider from "./context";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="container">
      <div className="content">
        <ContextProvider>
          <Header />
          <Cards />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
