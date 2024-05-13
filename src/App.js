import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import UserDetailPage from "./page/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
