import { NavLink } from "react-router-dom";

const NavigationLink = ({ pageName, routePath }) => {
    return (
        <li>
            <NavLink
                className={(navData) => navData.isActive ? "active" : ""}
                to={routePath}
            >
                {pageName}
            </NavLink>
        </li>
    );
}

export default NavigationLink;