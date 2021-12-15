import { render, screen } from "@testing-library/react";
import HomePage from "./homePage";

describe("HomePage", () => {
    test("displays homepage heading", () => {
        render(<HomePage/>);
        const headingOneText = screen.getByText("Welcome To White Rabbt!");
        expect(headingOneText).toBeInTheDocument();
    });
    test("displays quote on homepage", () => {
        render(<HomePage/>);
        const quoteText = screen.getByText("Imagination is the only weapon in the war with reality.");
        expect(quoteText).toBeInTheDocument();
    });
    test("display navigation on homepage", () => {
        render(<HomePage/>);
        const currentPath = screen.getByRole("navigation");
        expect(currentPath).toBeInTheDocument();
    });
})