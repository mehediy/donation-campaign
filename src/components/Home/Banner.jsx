const Banner = () => {
  return (
    <div className="mt-[-150px]">
      <div className="h-[600px] bg-[url('https://i.ibb.co/q1hFHMn/donation12.png')] bg-cover bg-center">
        <div className="h-full flex items-center justify-center flex-col gap-12 bg-white/95 ">
          <h1 className="text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="flex rounded-lg">
            <input
              className="p-4 px-6 w-[400px] rounded-lg rounded-r-none border-2 border-r-0"
              type="text"
              placeholder="Search here..."
            />
            <button className="py-4 px-8 rounded-lg rounded-l-none bg-[#FF444A] text-white font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
