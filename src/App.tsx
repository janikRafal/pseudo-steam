// src/App.tsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Store from "./pages/Store";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#1b2838",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/store" element={<Store />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
