import { useEffect, useState } from "react"
import { AppConstants } from "../constants";
import { RestaurantDetailsType } from "../../types/restaurantDetails.model";

const useFetchRestaurantDetails = (restId?: string): RestaurantDetailsType | null => {
  
    const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetailsType | null>(null);

    useEffect(() => {
        const fetchRestDetails = async () => {
            try {
                const url = `${AppConstants.SWIGGY.API.BASE_URL}/${AppConstants.SWIGGY.API.PATH.MENU.NAME}/${AppConstants.SWIGGY.API.PATH.MENU.END_POINTS.PL}/${AppConstants.SWIGGY.API.PATH.MENU.Q_PARAMS}&restaurantId=${restId}`;
                const url_with_cors_handler = `${AppConstants.CORS_HANDLER}/get?url=${encodeURIComponent(url)}`;
                const resp = await fetch(url_with_cors_handler);
                const data = await resp.json();
                const parsedData = JSON.parse(data.contents);
                // console.log(parsedData);
                if(parsedData) {
                    // console.log(parsedData);
                    const cards = parsedData.data?.cards;
                    // console.log(cards);
                    setRestaurantDetails({
                            basicInfo: cards[2].card.card.info,
                            offers: cards[3].card.card.gridElements.infoWithStyle.offers,
                            pref_details: cards[4].groupedCard?.cardGroupMap.REGULAR.cards[0].card.card,
                            topPicksList: cards[4].groupedCard?.cardGroupMap.REGULAR.cards[1].card.card,
                            menuSectionsList: cards[4].groupedCard?.cardGroupMap.REGULAR.cards.slice(2, -2)
                        
                    })
                }

            }
            catch(err) {
                console.log("Error while fetching restaurant details", err);
                setRestaurantDetails(null);
            }
        }

        fetchRestDetails();
    }, [restId])

    return restaurantDetails;
}

export default useFetchRestaurantDetails