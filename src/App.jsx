import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ListService from "./components/ListService/ListService";
import Technologies from "./components/Technologies/Technologies";
import Clients from "./components/Clients/Clients";
import CtaCards from "./components/CtaCards/CtaCards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ListService />
      <Technologies />
      <Clients />
      <CtaCards />
      <Footer />
    </>
  );
}

export default App;
