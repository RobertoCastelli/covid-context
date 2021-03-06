import React, { useContext } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiVirusFill } from "react-icons/ri";
import { DataContext } from "../../context";
import CountUp from "react-countup";

const Cards = () => {
  const context = useContext(DataContext);
  const { confirmed, deaths, recovered, loading, selectedCountry } = context;

  if (loading) {
    return <div className="loading">LOADING...</div>;
  } else {
    return (
      <div>
        <ul className="card-wrapper">
          {/* CONFIRMED CARD */}
          <li className="confirmed-wrapper">
            <div>
              <RiVirusFill size={20} />
            </div>
            <h4>CONFIRMED</h4>
            {confirmed && (
              <CountUp start={0} end={confirmed} duration={2} separator={","} />
            )}
          </li>
          {/* CONFIRMED DEATHS */}
          <li className="deaths-wrapper">
            <div>
              <FaSkullCrossbones size={20} />
            </div>
            <h4>DEATHS</h4>
            {deaths && (
              <CountUp start={0} end={deaths} duration={2} separator={","} />
            )}
          </li>
          {/* CONFIRMED RECOVERED */}
          <li className="recovered-wrapper">
            <div>
              <RiMentalHealthLine size={20} />
            </div>
            <h4>RECOVERED</h4>
            {recovered && (
              <CountUp start={0} end={recovered} duration={2} separator={","} />
            )}
          </li>
        </ul>
        {/* SELECTED COUNTRY TITLE */}
        <h1 className="header-country">{selectedCountry}</h1>
      </div>
    );
  }
};

export default Cards;
