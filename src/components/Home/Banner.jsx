const Banner = () => {
  return (
    <div>
      {/* <div className=" bg-[url('https://i.ibb.co/q1hFHMn/donation12.png')] opacity-10 h-[600px] bg-cover bg-no-repeat bg-center"></div> */}
      <div className="flex items-center justify-center flex-col gap-12 h-[600px] bg-slate-100">
        <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
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
  );
};

export default Banner;
