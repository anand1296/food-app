import { useParams } from "react-router-dom";
import MenuList from "../../components/MenuList/MenuList";
import useFetchRestaurantDetails from "../../utils/hooks/useFetchRestaurantDetails";
import RestaurantDetailsShimmer from "./RestaurantDetailsShimmer";
import { MenuSection, Menu_Cards, Offer, OfferInfo } from "../../types/restaurantDetails.model";
import Accordion from "../../components/common/Accordion/Accordion";
import { memo, useState } from "react";

const RestaurantDetails = () => {
    // const MenuSectionAccordion = Accordion(MenuList);
  const { restId } = useParams();
  console.log(restId);

  const [expandedMenuIdx, setExpandedMenuIdx] = useState(0);
    const restaurantDetails = useFetchRestaurantDetails(restId);

  // console.log(restaurantDetails);
  

  const getOfferLogo = (offerInfo: OfferInfo) => {
    if (offerInfo.offerLogo?.length) {
      return `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${offerInfo.offerLogo}`;
    } else {
      return "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart";
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="p-8 w-2/3">
        {restaurantDetails ? (
          <div className="shadow-lg rounded-lg p-8">
            <div className="basic-info flex justify-between items-center">
              <div className="res-info flex flex-col">
                <span className="text-2xl font-bold">{restaurantDetails?.basicInfo.name}</span>
                <span className="font-normal">{restaurantDetails?.basicInfo.cuisines.join(", ")}</span>
                <span className="font-light">
                  {restaurantDetails?.basicInfo.locality}, {restaurantDetails?.basicInfo.areaName}
                </span>
              </div>
              <div className="rating-info flex flex-col border rounded-lg">
                <span className="text-xl text-center font-bold p-2">⭐{restaurantDetails?.basicInfo.avgRating}</span>
                <hr />
                <span className="text-sm p-2">{restaurantDetails?.basicInfo.totalRatingsString}</span>
              </div>
            </div>
            <hr className="border-t border-dashed my-4" />
            <div className="time-n-cost flex w-1/3 gap-2">
              { restaurantDetails?.basicInfo.sla.slaString?.length ? <span className="text-md font-semibold">⏳ {restaurantDetails?.basicInfo.sla.slaString}</span> : null }
              <span className="text-md font-semibold">💷 {restaurantDetails?.basicInfo.costForTwoMessage}</span>
            </div>
            <div className="offers flex gap-4 overflow-auto my-2">
              {restaurantDetails.offers.map((offer) => (
                <div
                  key={offer.info.offerIds[0]}
                  className="offer-card my-2 whitespace-nowrap text-ellipses flex flex-col p-4 border rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <img className="w-[18px] h-[18px]" src={getOfferLogo(offer.info)} alt="offer" />
                    <span className="mx-1">{offer.info.header}</span>
                  </div>
                  <div className={`flex text-[${offer.info.descriptionTextColor}]-500 text-sm`}>
                    <span>{offer.info.couponCode}</span>
                    {" | "}
                    <span>{offer.info.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="veg-toggle flex">
                <label htmlFor="vegToggle" className="relative flex justify-between items-center p-2 text-lg cursor-pointer">Only Veg
                    <input id="vegToggle" type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"/>
                    <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
                </label>
            </div>
            <hr className="my-4"/>
            <div className="top-picks">
                <span className="text-lg font-bold">Top Picks</span>
            </div>
            <hr className="my-4"/>
            <div className="menu-list-section">
              { restaurantDetails?.menuSectionsList?.length ? (restaurantDetails.menuSectionsList as Array<MenuSection>).map((list, index) => (
                list.card.card ? <section key={index}>
                  {/* <MenuList title={list.card.card.title} menuItems={list.card.card.itemCards}/> */}
                  {/* <MenuSectionAccordion key={list.card.card.title} title={list.card.card.title} body={list.card.card.itemCards}/> */}
                  <Accordion key={list.card.card.title} title={list.card.card.title} body={list.card.card.itemCards} isOpen={expandedMenuIdx === index} setIsOpen={() => setExpandedMenuIdx((prevIdx) => prevIdx === index ? -1 : index)}/>
                </section> : <></>
              )): <></>}
            </div>
          </div>
        ) : (
          <RestaurantDetailsShimmer></RestaurantDetailsShimmer>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
