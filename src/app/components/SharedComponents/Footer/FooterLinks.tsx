export default function FooterLinks() {
  return (
    <div className="grid grid-cols-4 gap-x-[180px]">

      {/* NAVIGATION */}
      <div className="w-36 flex flex-col items-start text-left">
        <div className="text-white text-base font-bold uppercase font-['Rihal']">
          Navigation
        </div>

        <div className="mt-[23px] opacity-80 text-white text-base font-normal font-['Rihal'] flex flex-col space-y-[10px]">
          <div>Home</div>
          <div>Products</div>
          <div>Solutions</div>
        </div>
      </div>

      {/* COMPANY */}
      <div className="w-36 flex flex-col items-start text-left">
        <div className="text-white text-base font-bold uppercase font-['Rihal']">
          Company
        </div>

        <div className="mt-[23px] opacity-80 text-white text-base font-normal font-['Rihal'] flex flex-col space-y-[10px]">
          <div>About Us</div>
          <div>Careers</div>
          <div>Tenders</div>
        </div>
      </div>

      {/* OUR GROUP */}
      <div className="w-[180px] flex flex-col items-start text-left">
        <div className="text-white text-base font-bold uppercase font-['Rihal']">
          Our Group
        </div>

        <div className="mt-[14px] opacity-80 text-white text-base font-normal font-['Rihal']">
          <span className="block leading-[32px] whitespace-nowrap">
            Transformation Pioneers
          </span>
          <span className="block leading-[32px] whitespace-nowrap">
            Codeline
          </span>
          <span className="block leading-[32px] whitespace-nowrap">
            Cloud (Coming Soon)
          </span>
        </div>
      </div>

      {/* FIND US */}
      <div className="w-[180px] flex flex-col items-start text-left">
        <div className="text-white text-base font-bold uppercase font-['Rihal'] whitespace-nowrap">
          Find Us
        </div>

        <div className="mt-[14px] opacity-80 text-white text-base font-normal font-['Rihal']">
          <span className="block leading-[32px] whitespace-nowrap">
            Our HQ
          </span>
          <span className="block leading-[32px] whitespace-nowrap">
            Location
          </span>
        </div>
      </div>

    </div>
  );
}
