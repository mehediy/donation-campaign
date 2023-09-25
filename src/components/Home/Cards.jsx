import React from "react";
import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-4 gap-4">
        {data.map((data, idx) => (
          <Card key={idx} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
