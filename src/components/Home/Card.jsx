import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = data;
  return (
    <Link to={`/donation_details/${id}`}>
      <div className="rounded-lg overflow-hidden flex flex-col h-full">
        <div className="h-[200px]">
          <img className="object-cover h-full w-full" src={picture} />
        </div>
        <div
          style={{ backgroundColor: card_bg_color }}
          className="p-4 flex-auto"
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
            style={{ color: text_button_bg_color }}
            className="text-xl font-semibold"
          >
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
