
import CTABackground from "./CTABackground";
import CTACard from "./CTACard";

export default function CTA() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        overflow-visible
      "
    >
      {/* ===== Background Layer ===== */}
      <CTABackground/>

      {/* ===== Card ===== */}
      <CTACard />
    </section>
  );
}
