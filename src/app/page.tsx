import Image from "next/image";

import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";
import Home1 from "./components/Home/Home";
import CTA from "./components/SharedComponents/CTA/CTA";
import Blogs from "./components/Blogs/Blogs";

export default function Home() {
  return (
    <main>
    
      <Navbar />
   
      <Home1 />
      
      

        {/* ===== CTA ===== */}
        <section className="flex justify-center px-4">
          <CTA />
        </section>

        {/* ===== Footer ===== */}
        <Footer />
    </main>
  );
}
