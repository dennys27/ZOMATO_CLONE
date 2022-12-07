import React from "react";
import { restaurants } from "../../data/restaurants";
import Explore from "../common/exploreSection";
import Filters from "../common/filters";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fi fi-rs-exchange-alt"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants;

export const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <Explore list={restaurantList } collectionName="Delivery Restaurants in Banglore" />
    </div>
  );
};
