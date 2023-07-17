import "./App.css";
import Hero from "./component/Hero/Hero";
import MostPicked from "./component/MostPicked/MostPicked";
import Navbar from "./component/Navbar/Navbar";
import Fasilities from "./component/Fasilities/Fasilities";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked/>
      <Fasilities/>
    </>
  );
}

export default App;
