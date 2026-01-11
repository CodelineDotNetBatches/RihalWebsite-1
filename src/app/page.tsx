import Image from "next/image";

import Navbar from "./components/SharedComponents/Navbar/Navbar";
import Footer from "./components/SharedComponents/Footer/Footer";
import Home1 from "./components/Home/Home";

export default function Home() {
  return (
    <main>
    
      <Navbar />
   
      <Home1 />
      
      

      <Footer />
    </main>
  );
}
