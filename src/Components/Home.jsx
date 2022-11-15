
import CustomSection from "./CustomSection";
import Earnings from "./Earrnings";
import Header from "./Header";
import ScrollToTop from "./Scrolltotop";
import Services from "./Services";
import Blogs from "./Blogs";


export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Services />
      <Earnings />
      <CustomSection />
      <Blogs />

      <ScrollToTop />
    </div>
  );
}


