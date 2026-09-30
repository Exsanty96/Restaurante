import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedDishes from "./components/FeaturedDishes";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Gallery />
        <Location />
      </main>

      <Footer />
    </>
  );
}

export default App;