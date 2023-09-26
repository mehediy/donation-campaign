import React, { useEffect, useState } from "react";
import DonatedCard from "../components/DonatedCard";

const Donation = () => {
  const [donatedData, setDonatedData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("donated"));
    if (localData) setDonatedData(localData);
  }, []);
  // console.log(localData);

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-col gap-6 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {donatedData.length > 4 && showAll
            ? donatedData.map((data, idx) => (
                <DonatedCard key={idx} data={data} />
              ))
            : donatedData
                .slice(0, 4)
                .map((data, idx) => <DonatedCard key={idx} data={data} />)}

          {}
        </div>
        {donatedData.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#009444] text-white px-4 py-2 rounded"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
