import React from "react";
import Card from "./Card";

const Cards = ({ data, searchedData }) => {
  return (
    <div className="container mx-auto px-2 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchedData.length !== 0
          ? searchedData.map((data, idx) => <Card key={idx} data={data} />)
          : data.map((data, idx) => <Card key={idx} data={data} />)}
      </div>
    </div>
  );
};

export default Cards;
