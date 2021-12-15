import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          exact path ="/"
          element={<HomePage/>}
        />
      </Routes>
    </div>
  );
}

export default App;