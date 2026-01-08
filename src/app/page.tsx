import Image from "next/image";
import Products from "./components/Products/Products";
import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";
import Home1 from "./components/Home/Home";

export default function Home() {
  return (
    <main>
    
      <Navbar />
   
      <Home1 />
      <Products />
      <div className="h-[220px] w-full bg-gradient-to-r from-[#40A4A0] to-black/70" />

      <Footer />
    </main>
  );
}
