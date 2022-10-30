import Blogs from "./Components/Blogs";
import CustomSection from "./Components/CustomSection";
import Earnings from "./Components/Earrnings";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
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
    </div>
  );
}

export default App;
