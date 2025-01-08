import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import MetaAds from "./pages/services_pages/MetaAds";
import GoogleAds from "./pages/services_pages/GoogleAds";
import SEO from "./pages/services_pages/SEO";
import WebsiteDesigning from "./pages/services_pages/WebsiteDesigning";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="meta-ads" element={<MetaAds/>}/>
          <Route path="google-ads" element={<GoogleAds/>}/>
          <Route path="search-engine-optimization" element={<SEO/>}/>
          <Route path="website-designing" element={<WebsiteDesigning/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
