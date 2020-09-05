import React, { useContext } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiVirusFill } from "react-icons/ri";
import { DataContext } from "../../context";
import CountUp from "react-countup";

const Cards = () => {
  const context = useContext(DataContext);
  const { confirmed, deaths, recovered, loading } = context;

  //--> Render
  if (loading) {
    return <div className="loading">LOADING...</div>;
  } else {
    return (
      <div>
        <ul>
          <li className="confirmed-wrapper">
            <div>
              <RiVirusFill size={20} />
            </div>
            <h4>CONFIRMED</h4>
            <CountUp start={0} end={confirmed} duration={2} separator={","} />
          </li>

          <li className="deaths-wrapper">
            <div>
              <FaSkullCrossbones size={20} />
            </div>
            <h4>DEATHS</h4>
            <CountUp start={0} end={deaths} duration={2} separator={","} />
          </li>

          <li className="recovered-wrapper">
            <div>
              <RiMentalHealthLine size={20} />
            </div>
            <h4>RECOVERED</h4>
            <CountUp start={0} end={recovered} duration={2} separator={","} />
          </li>
        </ul>
      </div>
    );
  }
};

export default Cards;
