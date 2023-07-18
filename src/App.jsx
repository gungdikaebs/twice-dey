import "./App.css";
import Hero from "./component/Hero/Hero";
import MostPicked from "./component/MostPicked/MostPicked";
import Navbar from "./component/Navbar/Navbar";
import Facilities from "./component/Facilities/Facilities";
import Recommend from "./component/Recommend/Recommend";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked/>
      <Facilities/>
      <Recommend/>
    </>
  );
}

export default App;
