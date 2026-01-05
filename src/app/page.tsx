import Image from "next/image";
import Products from "./components/Products/Products";
import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";

export default function Home() {
  return (
    <main >
     <Products />

     <div className="h-[220px] w-full bg-gradient-to-r from-[#40A4A0] to-black/70" />
      <Navbar/>
       {/* Footer */}
        <Footer />
    </main>
  );
}
