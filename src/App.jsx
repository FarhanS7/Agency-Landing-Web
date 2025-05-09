import "./App.css";
import CompanyLogos from "./components/CompanyLogos";
import FAQ from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingPlans from "./components/PricingPlans";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

function App() {
  return (
    <div div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <CompanyLogos />
      <FeaturesSection />
      <Testimonial />
      <PricingPlans />
      <FAQ />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
