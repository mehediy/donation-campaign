import React, { useState } from "react";
import Banner from "../components/Home/Banner";
import Cards from "../components/Home/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { donation_data } = useLoaderData();
  const [searchedData, setSearchedData] = useState([]);

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm);
    const filteredData = donation_data.filter(
      (item) => item.category.toLowerCase().includes(searchTerm.toLowerCase())
      // item.category.toLowerCase().includes(searchTerm) ===
      // searchTerm.toLowerCase()
    );
    setSearchedData(filteredData);
  };
  // console.log(searchedData);

  return (
    <div>
      <Banner searchHandler={searchHandler} />
      <Cards data={donation_data} searchedData={searchedData} />
    </div>
  );
};

export default Home;
