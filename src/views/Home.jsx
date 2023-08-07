import Hero from "../component/Hero/Hero";
import MostPicked from "../component/MostPicked/MostPicked";
import Navbar from "../component/Navbar/Navbar";
import Facilities from "../component/Facilities/Facilities";
import Recommend from "../component/Recommend/Recommend";
import Footer from "../component/Footer/Footer";
import ModalProfilePicture from "../component/Navbar/ModalProfilePicture";

function Home() {
  return (
    <>
      <Navbar />
      <ModalProfilePicture />
      <Hero />
      <MostPicked />
      <Facilities />
      <Recommend />
      <Footer />
    </>
  );
}
export default Home;
