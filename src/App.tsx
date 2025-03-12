import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import "./App.css";
import Store from "./pages/store/Store";
import Support from "./pages/support/Support";

const ROUTES = [
  { path: "/", element: <Store /> },
  { path: "/store", element: <Store /> },
  { path: "/support", element: <Support /> },
  { path: "/about", element: <About /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
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
