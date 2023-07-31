import "./App.css";
import Hero from "./component/Hero/Hero";
import MostPicked from "./component/MostPicked/MostPicked";
import Navbar from "./component/Navbar/Navbar";
import Facilities from "./component/Facilities/Facilities";
import Recommend from "./component/Recommend/Recommend";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MostPicked />
      <Facilities />
      <Recommend />
      <Footer />
    </>
  );
}

export default App;
