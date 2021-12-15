import NavigationLink from "../atoms/navigationLink";

const routes = require("../routes/routes.json");

const Navigation = () => {
    return (
        <nav>
            <ul>
                {routes.map((route, index) =>
                    <NavigationLink
                        key={index}
                        pageName={route.page}
                        routePath={route.path}
                    />
                )}
            </ul>
        </nav>
    );
}

export default Navigation;