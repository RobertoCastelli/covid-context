import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { DataContext } from "../../context";

const Charts = () => {
  const context = useContext(DataContext);
  const { confirmed, deaths, recovered, selectedCountry } = context;

  const barChart = selectedCountry ? (
    <Bar
      data={{
        labels: ["confirmed", "deaths", "recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              " rgba(255, 165, 0, 0.5)",
              "rgba(165, 42, 42, 0.5)",
              "rgba(0, 128, 0, 0.5)",
            ],
            data: [confirmed, deaths, recovered],
          },
        ],
      }}
      options={{
        legend: { display: false },
        // title: {
        //   display: true,
        //   text: `Selected country: ${selectedCountry}`,
        // },
      }}
    />
  ) : null;

  return <div className="chart-image">{barChart}</div>;
};

export default Charts;
