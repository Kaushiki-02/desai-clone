import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import other pages

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more Route entries here */}
    </Routes>
  </Router>
);

export default AppRoutes;
