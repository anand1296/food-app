import React from "react";

const RestaurantDetailsShimmer = () => {
  return (
    <div className="shadow-lg rounded-lg p-8 animate-pulse">
        <div className="basic-info flex justify-between items-center">
          <div className="res-info flex flex-col gap-2">
            <span className="w-40 h-8 text-xl bg-gray-800"></span>
            <span className="w-32 h-4 text-md bg-gray-500"></span>
            <span className="w-32 h-4 text-md bg-gray-500"></span>
          </div>
          <div className="rating-info flex flex-col border-2 rounded-md p-4 gap-2">
            <span className="w-12 h-8 text-2xl bg-gray-700 p-2"></span>
            <hr />
            <span className="w-12 h-8 text-md bg-gray-400 p-2"></span>
          </div>
        </div>
    </div>
  );
};

export default React.memo(RestaurantDetailsShimmer);
