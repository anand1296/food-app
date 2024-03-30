import {render, screen} from "@testing-library/react";
import About from "./About";

test("should render about page & heading with About text", () => {
    render(<About/>);

    const text = screen.getByText("About");
    expect(text).toBeInTheDocument();
})

test("should render about page & both the headers", () => {
    render(<About/>);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(2);
})