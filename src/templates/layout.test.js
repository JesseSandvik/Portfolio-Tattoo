import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../templates/layout";

describe("Layout", () => {
    test("displays site title on Layout", () => {
        render(
            <Router>
                <Layout/>
            </Router>
        );
        const headingOneText = screen.getByText("Miss Tattoo Tara");
        expect(headingOneText).toBeInTheDocument();
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
})