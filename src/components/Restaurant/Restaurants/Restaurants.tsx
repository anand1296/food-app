import {RestaurantCard, PromotedRestautantCard} from "../RestaurantCard/RestaurantCard";
import "./Restaurants.css";
import { RestaurantsType } from "../../../types/restaurant.model";
import RestaurantCardShimmer from "../RestaurantCardShimmer";
import React from "react";

const RestaurantCardWithDiscount = PromotedRestautantCard(RestaurantCard);

const Restaurants = ({ restaurantList }: { restaurantList: Array<RestaurantsType> }) => {
  // console.log(restaurantList);
  return (
    <div className="res-cards-wrapper">
      {restaurantList.length
        ? restaurantList.map((restaurant: RestaurantsType) => (
            restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardWithDiscount key={restaurant.info.id} restaurantData={restaurant.info}/> : <RestaurantCard key={restaurant.info.id} restaurantData={restaurant.info} />
          ))
        : [...new Array(10)].map((_, index) => <RestaurantCardShimmer key={index} />)}
    </div>
  );
};

export default React.memo(Restaurants);
