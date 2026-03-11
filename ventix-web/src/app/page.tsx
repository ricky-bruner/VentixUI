import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import WhyVentix from "@/components/WhyVentix";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Downloads from "@/components/Downloads";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070d1f] text-white">
      <Nav />
      <Hero />
      <TheProblem />
      <WhyVentix />
      <Products />
      <Industries />
      <Downloads />
      <Contact />
      <Footer />
    </div>
  );
}
