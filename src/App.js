import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter/index.js";
// import "booap/dist/css/bootstrap.min.css";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen.js";
import ProfileScreen from "./components/Tuiter/ProfileScreen/ProfileScreen.js";

// Reducers
import HomeScreen from "./components/Tuiter/HomeScreen/index.js";
import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import IndexPage from "./pages/IndexPage.js";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<IndexPage />} />
              <Route path="home" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Tuiter />}>
                <Route index element={<HomeScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="profiles" element={<ProfileScreen />} />
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;