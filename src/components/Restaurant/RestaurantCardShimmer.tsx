import React from "react";
import "./RestaurantCard/RestaurantCard.css"

const container__styles = {
  width: "15em",
  height: "300px",
  overflow: "hidden",
  borderRadius: "12px",
  boxShadow: "0 15px 40px -20px rgba(40, 44, 63, 0.15)",
  padding: "0.4rem",
  backgroundColor: "#f0f0f0"
};

const img_wrapper_styles = {
    width: "100%",
    height: "200px",
    borderRadius: "16px",
    filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)",
    backgroundColor: "#f7f8f8"
};

const RestaurantCardShimmer = () => {
  return <div style={container__styles} className="animate-pulse">
    <div style={img_wrapper_styles}></div>
  </div>;
};

export default React.memo(RestaurantCardShimmer);
