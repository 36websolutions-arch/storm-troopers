import Footer from "@/src/common/Footer";
import About from "@/src/components/About";
import CompactFAQ from "@/src/components/CompactFAQ";
import Comprehensive from "@/src/components/Comprehensive";
import Hero from "@/src/components/Hero";
import HowWeWork from "@/src/components/HowWeWork";
import RoofTypes from "@/src/components/RoofTypes";
import Siding from "@/src/components/Siding";
import Storm from "@/src/components/Storm";
import WhyAddressRoof from "@/src/components/WhyAddressRoof";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Comprehensive />
      <Siding />
      <RoofTypes />
      <Storm />
      <WhyAddressRoof />
      <HowWeWork />
      <CompactFAQ />
      <Footer/>
    </main>
  );
}
