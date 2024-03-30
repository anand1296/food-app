import { AppConstants } from "../../utils/constants";

export async function getRestaurantList() {
  const url = `${AppConstants.SWIGGY.API.BASE_URL}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.NAME}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.END_POINTS.LIST}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.VERSION}/${AppConstants.SWIGGY.API.PATH.RESTUARANTS.Q_PARAMS}`;
  const url_with_cors_handler = `${AppConstants.CORS_HANDLER}/get?url=${encodeURIComponent(url)}`;
  const res = await fetch(url_with_cors_handler);
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  const data = await res.json();
  const parsedData = JSON.parse(data.contents);
  return parsedData;
  const restaurants = parsedData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  return restaurants;
}
