import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

const App = () => {
  return (
      <div className=" bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;