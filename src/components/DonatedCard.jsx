import React from "react";
import { Link } from "react-router-dom";

const DonatedCard = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = data;

  return (
    <div className="rounded-lg overflow-hidden flex">
      <div className="w-1/3 overflow-hidden">
        <img className="h-full object-cover" src={picture} />
      </div>
      <div
        style={{ backgroundColor: card_bg_color }}
        className="p-4 flex flex-col items-start gap-2 w-2/3"
      >
        <div
          style={{ backgroundColor: category_bg_color }}
          className="px-2 rounded w-fit mb-2"
        >
          <h4 style={{ color: text_button_bg_color }} className="text-sm">
            {category}
          </h4>
        </div>
        <h3
          //   style={{ color: text_button_bg_color }}
          className="text-lg md:text-xl font-semibold"
        >
          {title}
        </h3>
        <span style={{ color: text_button_bg_color }} className="text-sm">
          ${price}
        </span>

        <Link to={`/donation/${id}`}>
          <button
            className="bg-white px-2 md:px-4 py-1 md:py-2 rounded"
            style={{ backgroundColor: text_button_bg_color, color: "#fff" }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonatedCard;
