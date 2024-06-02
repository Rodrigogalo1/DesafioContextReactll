import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import ContextProvider from "./context/ContextProvider";


const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <ContextProvider photoUrl={PHOTO_URL}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </ContextProvider>
    </div>
  );
};
export default App;
