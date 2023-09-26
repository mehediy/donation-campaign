import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const { donation_data } = useLoaderData();

  const findData = donation_data.find((item) => item.id == id);
  const { picture, title, text_button_bg_color, description, price } = findData;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-8">
        <div>
          <div className="rounded overflow-hidden relative">
            <img
              className="w-full"
              src="https://i.ibb.co/LpBhTzP/donation12.png"
            />

            <div className="absolute h-[100px] bg-[#00000080] bottom-0 right-0 left-0 flex flex-col justify-center items-start">
              <button
                className="bg-white px-4 py-2 rounded ml-8"
                style={{ backgroundColor: text_button_bg_color, color: "#fff" }}
              >
                Donate ${price}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm py-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
