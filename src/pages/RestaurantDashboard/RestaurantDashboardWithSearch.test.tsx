import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantDashboard from "./RestaurantDashboard";
import MOCK_DATA from "../../mocks/restaurants.mock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ contents: JSON.stringify(MOCK_DATA) }),
  }),
) as jest.Mock;

it("should render Restaurants with search box", async () => {

    // render(<InputSearch placeholder="Search Restaurants/Cuisines..." onSearch={(searchStr: string) => {}}/>)

    await act(async () => render(
        <BrowserRouter>
            <RestaurantDashboard/>
        </BrowserRouter>
    ))

    const searchInput = screen.getByPlaceholderText("Search Restaurants/Cuisines...");
    // expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "burger" } });

    const searchResults = screen.getAllByTestId('restaurant-card');
    // console.log(searchResults.map((item) => item.getElementsByClassName('name')[0].textContent));
    const allResultsContainSearchText = searchResults.every((item) => item.getElementsByClassName('name')[0].textContent?.toLowerCase().includes('burger'));
    // expect(searchResults.length).toEqual(3);
    expect(allResultsContainSearchText).toBeTruthy();
})