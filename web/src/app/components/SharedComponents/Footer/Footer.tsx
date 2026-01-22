import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";


export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">

      {/* Glow */}
      <div
        className="
    absolute
    w-[1071px]
    h-[973px]
    rounded-full
    bg-[#00E6D0]
    opacity-70
    blur-[152px]
    left-1/2
    -translate-x-1/2
    bottom-[-739.5px]
    pointer-events-none
  "
      />


      {/* Content Frame (Frame 133) */}
      <div
        className="
           relative
    max-w-[1100px]
    mx-auto
    px-6
    sm:px-10
    lg:px-[120px]
    pt-[80px]
    lg:pt-[100px]
    pb-[80px]
    lg:pb-[100px]
    flex
    flex-col
          
        "
      >
        <FooterTop />
        <div className="h-[40px]" />
        <FooterLinks />
        <div className="h-[40px]" />
        <FooterBottom />
      </div>

    </footer>
  );
}
