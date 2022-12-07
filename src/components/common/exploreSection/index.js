import React from "react";
import "./explore.css";
import ExploreCard from "./exploreCard";

const Explore = ({ list, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant,i) => {
          return <ExploreCard key={i} restaurant={restaurant} />;
        })}
      </div>
      <div className="breaker max-width"></div>
    </div>
  );
};

export default Explore;
