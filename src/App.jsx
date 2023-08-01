import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Lodging from "./views/Lodging";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Recommendation" element={<Lodging />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
