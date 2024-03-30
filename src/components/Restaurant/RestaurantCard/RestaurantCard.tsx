import { ReactElement } from "react";
import { Info } from "../../../types/restaurant.model";
import { AppConstants } from "../../../utils/constants";
import "./RestaurantCard.css"
import { Link } from "react-router-dom";

const RestaurantCard = ({restaurantData}: {restaurantData: Info}) => {
    // console.log(restaurantData);

    const getImagePath = (imgId: string) => {
        return `${AppConstants.SWIGGY.IMAGES.PATH}/${imgId}`
    }

    const getCuisines = (cuisines: Array<string>) => {
        return cuisines.join(", ");
    }

    return (
        <Link data-testid="restaurant-card" to={`/restaurant/${restaurantData.id}`} className="restaurant-card">
            <div className="img-wrapper">
                <img src={getImagePath(restaurantData.cloudinaryImageId)} alt="" />
            </div>
            <div className="info">
                <div className="name">{restaurantData.name}</div>
                <div className="rating-time">
                    <span className="rating">
                        ⭐
                        {restaurantData.avgRating}
                    </span>
                    {" ◾ "}
                    <span className="time">{restaurantData.sla.slaString}</span>
                </div>
                <div className="cuisine">{getCuisines(restaurantData.cuisines)}</div>
                <div className="address">📍{restaurantData.areaName}</div>
                {/* <div className="offers">
                    {restaurantData.aggregatedDiscountInfoV3.header}
                    {restaurantData.aggregatedDiscountInfoV3.subHeader}
                </div> */}
            </div>
        </Link>
    )
}

//HOC
const PromotedRestautantCard = (ChildComponent: any) => {
    return ({restaurantData}: {restaurantData: Info}) => {
        return (
            <div className="card-wrapper">
                <label className="discount-tag">{restaurantData.aggregatedDiscountInfoV3.header+' '+ (restaurantData.aggregatedDiscountInfoV3.subHeader?.length ? restaurantData.aggregatedDiscountInfoV3.subHeader : '')}</label>
                <ChildComponent restaurantData={restaurantData}/>
            </div>
        )
    }
}

export { RestaurantCard, PromotedRestautantCard };