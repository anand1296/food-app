import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"
import { Provider } from "react-redux";
import store from "../../../utils/store/store";
import { BrowserRouter } from "react-router-dom";

it("should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name: "Login"});
    // const loginBtn = screen.getByText("Login");

    expect(loginBtn).toBeInTheDocument();
})

it("should render header component with 0 cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByTestId("cart-items-count");
    expect(cartItems).toHaveTextContent('0');
})

it("should render header component & login btn should change to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginBtn);
    expect(loginBtn).toHaveTextContent("Default User");
})