import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "../templates/layout";

describe("Layout", () => {
    test("displays site title on Layout", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const headingOneText = screen.getByText("White Rabbt.");
        expect(headingOneText).toBeInTheDocument();
    });
    test("displays site title quote on Layout", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const quoteText = screen.getByText(`"Imagination is the only weapon in the war with reality." - The Cheshire Cat`);
        expect(quoteText).toBeInTheDocument();
    });
    test("display navigation on Layout", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const currentPath = screen.getByRole("navigation");
        expect(currentPath).toBeInTheDocument();
    });
    test("clicking home navigates user to homepage", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const homeNavigationLink = screen.getByText("home");
        userEvent.click(homeNavigationLink);
        const homeHeadingText = screen.getByText("Welcome To White Rabbt!");
        expect(homeHeadingText).toBeInTheDocument();
    });
})