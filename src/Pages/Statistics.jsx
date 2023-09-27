import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const { donation_data } = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("donated"));
    if (localData) setDonatedData(localData);
  }, []);

  const data = [
    ["Task", "Donation"],
    ["Your Donation", donatedData.length],
    ["Total Donation", donation_data.length - donatedData.length],
  ];

  return (
    <div className="container mx-auto">
      <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
        options={{
          legend: {
            position: "bottom",
          },
        }}
      />
    </div>
  );
};

export default Statistics;
