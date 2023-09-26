import React from "react";
import DonatedCard from "../components/DonatedCard";

const Donation = () => {
  const localData = JSON.parse(localStorage.getItem("donated"));
  console.log(localData);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {localData.map((data, idx) => (
          <DonatedCard key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Donation;
