import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function FooterBottom() {
  return (
    <div className="pt-[40px]">
    
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">

      {/* LEFT */}
      <div className="w-[240px] text-[rgba(255, 255, 255, 0.24)] text-sm font-normal font-['Rihal'] leading-4">
        © 2025 Rihal. All Rights Reserved.
      </div>



      {/* CENTER */}
      <div className="flex items-center justify-center">
        <Image
          src="/Images/Footer/logo.png"
          alt="Rihal Logo"
          width={92}
          height={48}
        />
      </div>

      {/* RIGHT */}
      <div className="w-60 flex justify-end items-center gap-[10px]">
        {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
          <div
            key={i}
            className="
        relative
          w-10 h-10
          flex items-center justify-center
          rounded-full
          ring-1 ring-[rgba(255,255,255,0.35)]
          shadow-[0px_17px_30px_rgba(255,60,0,0.17)]
           p-[9px] 
          transition
        "
          >
            <Icon size={14} className="text-white" />
          </div>
        ))}
      </div>

</div>
    </div>
  );
}
