export default function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Primary Regular Glow */}
      <div className="absolute w-[1280px] h-[749px] rounded-full
        bg-[#008175] blur-[126px] opacity-90
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Primary Dark */}
      <div className="absolute w-[1280px] h-[360px] rounded-full
        bg-[#0F1E1C] blur-[76px] opacity-20
        top-[160px] left-1/2 -translate-x-1/2"
      />

      {/* Accent Yellow */}
      <div className="absolute w-[880px] h-[320px] rounded-full
        bg-[#FFC300] blur-[300px] opacity-80
        bottom-[-120px] left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
