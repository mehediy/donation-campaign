import React from "react";
import Banner from "../components/Home/Banner";
import Cards from "../components/Home/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Cards data={data.donation_data} />
    </div>
  );
};

export default Home;
