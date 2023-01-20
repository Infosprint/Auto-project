import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SellMyCar from "./pages/SellMyCar";
const App = () => {
 

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sellmycar" element={<SellMyCar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
