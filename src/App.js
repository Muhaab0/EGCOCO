import Blogs from "./Components/Blogs";
import CustomSection from "./Components/CustomSection";
import Earnings from "./Components/Earrnings";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/Scrolltotop";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Services />
      <Earnings />
      <CustomSection />
      <Blogs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
