import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";

const PageRoutes = () => {
    return (
        <Routes>
            <Route
                exact path="/"
                element={<HomePage/>}
            />
        </Routes>
    );
}

export default PageRoutes;