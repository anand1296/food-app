import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../../pages/RestaurantDetails/RestaurantDetails";
import MOCK_DATA from "../../mocks/resMenuDetails.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../../utils/store/store";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/global/Header/Header";
import Cart from "../../components/Cart/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ contents: JSON.stringify(MOCK_DATA) }),
  })
) as jest.Mock;

// jest.mock("..", () => {
//   return {
//     useFetchRestaurantDetails: (id: string) => MOCK_DATA,
//   };
// });

it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantDetails />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Whopper (6)");
  // expect(accordianHeader).toBeInTheDocument();
  fireEvent.click(accordianHeader);
  // expect(screen.getAllByTestId('menu-item').length).toBe(6);

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  // console.log(addBtns.length);
  fireEvent.click(addBtns[0]);

  const cartItemsCount = screen.getByTestId("cart-items-count");
  expect(cartItemsCount).toHaveTextContent("1");

  fireEvent.click(addBtns[1]);

  expect(screen.getAllByTestId("cart-item").length).toEqual(2);

//   fireEvent.click(screen.getByTestId("cart-btn"));

  const clearCartBtn = screen.getByRole("button", {name: "Clear cart"});
  expect(clearCartBtn).toBeInTheDocument();
  fireEvent.click(clearCartBtn);
  setTimeout(() => {//since state update takes time
    expect(screen.getAllByTestId("cart-item").length).toBe(0);
  }, 1000)
  
});
