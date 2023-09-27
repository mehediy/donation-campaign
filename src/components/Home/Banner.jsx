import { useState } from "react";

const Banner = ({ searchHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="mt-0 md:mt-[-150px]">
      <div className="h-[300px] md:h-[600px] bg-[url('https://i.ibb.co/q1hFHMn/donation12.png')] bg-cover bg-center">
        <div className="h-full px-2 flex items-center justify-center flex-col gap-12 bg-white/95 ">
          <h1 className="text-3xl md:text-4xl text-center lg:text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="flex rounded-lg">
            <input
              className=" w-[200px] md:w-[400px] py-2 md:py-4 px-2 md:px-4 rounded-lg rounded-r-none border-2 border-r-0"
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search here..."
            />
            <button
              onClick={() => searchHandler(searchTerm)}
              className="py-2 md:py-4 px-4 md:px-8 rounded-lg rounded-l-none bg-[#FF444A] text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
