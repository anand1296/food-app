import React, { useEffect, useState } from "react";
import { AppConstants } from "../../utils/constants";
import InputSearch from "../../components/common/InputSearch/InputSearch";
import Restaurants from "../../components/Restaurant/Restaurants/Restaurants";
import { RestaurantsType } from "../../types/restaurant.model";
import "./RestaurantDashboard.css"

let nextOffset = "";

const RestaurantDashboard = () => {
    console.log('dashboard rendered');
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Array<RestaurantsType>>([]);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);

//   const handleScroll = () => {
//     console.log(
//       window.innerHeight,
//       document.documentElement.scrollTop,
//       window.innerHeight + document.documentElement.scrollTop,
//       document.documentElement.offsetHeight
//     );
//     if (loadMore && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

  const onSearch = (searchStr: string) => {
    // console.log(searchStr);
    setFilteredRestaurants(() =>
      restaurantList.filter((res: RestaurantsType) => 
        res.info.name.toLowerCase().includes(searchStr.toLowerCase())
        // || res.info.cuisines.join(", ").toLowerCase().includes(searchStr.toLowerCase())
        // || res.info.areaName.toLowerCase().includes(searchStr.toLowerCase())
        )
    );
  };

  useEffect(() => {
    console.log('fetching restaurants');
    const fetchRestaurants = async () => {
      try {
        const url =
          page === 1
            ? `${AppConstants.SWIGGY.API.BASE_URL}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.NAME}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.END_POINTS.LIST}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.VERSION}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.Q_PARAMS}`
            : `${AppConstants.SWIGGY.API.BASE_URL}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.NAME}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.END_POINTS.LIST}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.END_POINTS.UPDATE}`;
        const payload =
          page > 1
            ? {
                nextOffset: nextOffset,
                lat: "12.96340",
                lng: "77.58550",
                widgetOffset: {
                  NewListingView_category_bar_chicletranking_TwoRows: "",
                  NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                  Restaurant_Group_WebView_PB_Theme: "",
                  Restaurant_Group_WebView_SEO_PB_Theme: "",
                  collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "25",
                  inlineFacetFilter: "",
                  restaurantCountWidget: "",
                },
                filters: {},
                seoParams: {
                  seoUrl: "https://www.swiggy.com/",
                  pageType: "FOOD_HOMEPAGE",
                  apiName: "FoodHomePage",
                },
                page_type: "DESKTOP_WEB_LISTING",
                _csrf: "36fWAlBUonqi-mpzZ4Vq353WVM_-YEovvuB5mldc",
              }
            : {};
        const url_with_cors_handler = `${AppConstants.CORS_HANDLER}/${
          page > 1 ? "get" : "get"
        }?url=${encodeURIComponent(url)}`;
        const resp =
          page === 1
            ? await fetch(url_with_cors_handler)
            : await fetch(url_with_cors_handler, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              });
        const data = await resp.json();
        // console.log(data.contents, JSON.parse(data.contents));
        const parsedData = JSON.parse(data.contents);
        // console.log(parsedData);
        //   console.log(data, data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        const restaurants = parsedData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        nextOffset = parsedData.data.pageOffset?.nextOffset ?? "";
        setRestaurantList(restaurants);
        setFilteredRestaurants(restaurants);
        setLoadMore(Boolean(restaurants.length));
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };

    if (loadMore) {
      fetchRestaurants();
    }
  }, [page, loadMore]);

  //infinite-scroll logic is commented because CORS-handler does not give response for POST requests
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <div className="restaurants-dashboard">
      <InputSearch placeholder="Search Restaurants/Cuisines..." onSearch={onSearch} />
      <Restaurants restaurantList={filteredRestaurants}/>
    </div>
  );
};

export default RestaurantDashboard;
