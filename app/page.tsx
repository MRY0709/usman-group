import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/home/Hero";
import Stats from "../src/components/home/Stats";
import About from "../src/components/home/About";
import RentalCategories from "../src/components/home/RentalCategories";
import WhyChooseUs from "../src/components/home/WhyChooseUs";
import GroupCompanies from "../src/components/home/GroupCompanies";
import ContactCTA from "../src/components/home/ContactCTA";
import Footer from "../src/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <RentalCategories />
      <WhyChooseUs />
      <GroupCompanies />
      <ContactCTA />
      <Footer />
    </>
  );
}
