import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Lodging from "./views/Lodging";
import Preview from "./views/Preview";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Recommendation" element={<Preview />} />
          <Route path="/Pakenanya" element={<Lodging />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
