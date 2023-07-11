import "./App.css";
import Hero from "./component/Hero/Hero";
import MostPicked from "./component/MostPicked/MostPicked";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked/>
    </>
  );
}

export default App;
