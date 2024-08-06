import React from "react";
import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import DemoSlider from "@/components/DemoSlider";

const Home: React.FC = () => {
  return (
    <>
      <div className="max-w-screen-2xl !m-auto mx-4">
        <HeroSection />
        <CompanySection />
        <AboutComponent />
        <CatalogueSection />
        <CatalogSwiperSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
