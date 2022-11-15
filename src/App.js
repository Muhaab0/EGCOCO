import Home from "./Components/Home";
import {BrowserRouter , Routes , Route , Link} from "react-router-dom"
import Custom from "./Components/Contents/CustomPackage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Aboutus from "./Components/Contents/Aboutus";
import Contactus from "./Components/Contents/Contactus";

function App() {
  return (
    
    <BrowserRouter>
    <div>
      <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/EGCOCO" element={<Home />} />
          <Route path="/CustomPackage" element={<Custom />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
        <Footer />
    </div>
      </BrowserRouter> 

    );
}

export default App;
