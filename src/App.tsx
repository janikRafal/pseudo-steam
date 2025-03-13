import React from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import "./App.css";
import Store from "./pages/store/Store";
import Support from "./pages/support/Support";

const ROUTES = [
  { path: "/pseudo-steam", element: <Store /> },
  { path: "/pseudo-steam/store", element: <Store /> },
  { path: "/pseudo-steam/support", element: <Support /> },
  { path: "/pseudo-steam/about", element: <About /> },
  { path: "/pseudo-steam/privacy-policy", element: <PrivacyPolicy /> },
  { path: "*", element: <Navigate to="/pseudo-steam" replace /> },
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
