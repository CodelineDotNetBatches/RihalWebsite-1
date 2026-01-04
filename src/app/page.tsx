import Image from "next/image";
import Products from "./components/Products/Products";
import Navbar from "./components/SharedComponents/Navbar/Navbar";

export default function Home() {
  return (
    <main >
     <Products />

     <div className="h-[220px] w-full bg-gradient-to-r from-[#40A4A0] to-black/70" />
      <Navbar/>
    </main>
  );
}
