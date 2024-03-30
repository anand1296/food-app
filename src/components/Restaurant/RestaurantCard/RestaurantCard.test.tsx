import { render, screen } from "@testing-library/react"
import { PromotedRestautantCard, RestaurantCard } from "./RestaurantCard"
import MOCK_DATA from "../../../mocks/resCard.mock.json";
import { BrowserRouter } from "react-router-dom";

it("should render reactaurant card component with props data", () => {
    render(
        <BrowserRouter>
            <RestaurantCard restaurantData={MOCK_DATA.info}/>
        </BrowserRouter>
    )

    const resName = screen.getByText("Burger King");
    expect(resName).toBeInTheDocument();
})

it("should render promoted restaurant card", () => {
    const PromotedResCard = PromotedRestautantCard(RestaurantCard);
    render(
        <BrowserRouter>
            <PromotedResCard restaurantData={MOCK_DATA.info}/>
        </BrowserRouter>
    )
    const resName = screen.getByText("Burger King");
    expect(resName).toBeInTheDocument();
})