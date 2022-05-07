import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
// import "./App.css";
// import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
// import "booap/dist/css/bootstrap.min.css";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen.js";
import ProfileScreen from "./components/Tuiter/ProfileScreen/ProfileScreen.js";
// import "./vendors/bootstrap/css/bootstrap.min.css";
// import "./vendors/fontawesome/css/all.min.css";

// The pages

// Reducers
import who from "./components/Tuiter/reducers/who";
import tuits from "./components/Tuiter/reducers/tuits";
import ProfileInfo from "./components/Tuiter/reducers/profile";
import HomeScreen from "./components/Tuiter/HomeScreen/index.js";
import tuitsReducer from "./components/Tuiter/reducers/tuits-reducer";
import Register from "./pages/Register";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import IndexPage from "./pages/IndexPage.js";
import ProfileId from "./pages/ProfileId.js";
import Search from "./pages/Search.js";
import Following from "./pages/Following.js";

const reducers = combineReducers({ who, tuits, ProfileInfo, tuitsReducer });
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<IndexPage />} />
              <Route path="home" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="search" element={<Search />} />
              <Route path="profile" exact element={<Tuiter />}>
                <Route index element={<HomeScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="profiles" element={<ProfileScreen />} />
              </Route>
              <Route path="profile/:id" element={<ProfileId />}/>
              <Route path="search/:id" element={<ProfileId />}/>
              <Route path="following/:id" element={<Following />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;