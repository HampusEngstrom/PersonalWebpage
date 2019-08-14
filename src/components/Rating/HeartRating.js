import React from "react";
import Rating from "react-rating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyIcon } from "@fortawesome/free-regular-svg-icons";

const color = "#f5426c";

const EmptySymbol = ({ size }) => (
  <FontAwesomeIcon
    icon={emptyIcon}
    size={size}
    style={{ color, padding: "3px" }}
  />
);

const FullSymbol = ({ size }) => (
  <FontAwesomeIcon
    icon={fullIcon}
    size={size}
    style={{ color, padding: "3px" }}
  />
);

const HeartRating = ({ rating, width }) => {
  const size = width < 1 ? "2x" : "lg";
  return (
    <div style={{ display: "flex", flexShrink: 0 }}>
      <Rating
        className="rating"
        style={{ margin: "5px 0" }}
        initialRating={rating}
        emptySymbol={<EmptySymbol size={size} />}
        fullSymbol={<FullSymbol size={size} />}
        readonly={true}
        start={0}
        stop={5}
        step={1}
        fractions={2}
      />
    </div>
  );
};

export default HeartRating;
