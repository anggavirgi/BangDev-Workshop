import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Cta } from "../components/cta/Cta";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Landing } from "../components/landing/Landing";
import { Product } from "../components/product/Product";

const LandingPageView = () => {
  return (
    <div className="mx-16">
      <Header />
      <Landing />
      <About />
      <Product />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPageView;
