import "./App.css";
import Hero from "./component/Hero/Hero";
import MostPicked from "./component/MostPicked/MostPicked";
import Navbar from "./component/Navbar/Navbar";
import Facilities from "./component/Facilities/Facilities";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked/>
      <Facilities/>
    </>
  );
}

export default App;
