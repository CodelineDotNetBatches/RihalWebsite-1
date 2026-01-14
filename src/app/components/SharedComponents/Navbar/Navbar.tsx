"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import ProductsDropdown from "./ProductsDropdown";
import ServicesDropdown from "./ServicesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import AboutDropdown from "./AboutDropdown";





const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);



  const productsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null)


  const openProducts = () => {
    if (productsTimer.current) clearTimeout(productsTimer.current);
    setIsProductsOpen(true);
  };
  const closeProducts = () => {
    productsTimer.current = setTimeout(() => setIsProductsOpen(false), 120);
  };

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setIsServicesOpen(true);
  };
  const closeServices = () => {
    servicesTimer.current = setTimeout(() => setIsServicesOpen(false), 120);
  };

  const openIndustries = () => {
    if (industriesTimer.current) clearTimeout(industriesTimer.current);
    setIsIndustriesOpen(true);
  };
  const closeIndustries = () => {
    industriesTimer.current = setTimeout(
      () => setIsIndustriesOpen(false),
      120
    );
  };

  const openResources = () => {
  if (resourcesTimer.current) clearTimeout(resourcesTimer.current);
  setIsResourcesOpen(true);
};
const closeResources = () => {
  resourcesTimer.current = setTimeout(() => setIsResourcesOpen(false), 120);
};

const openAbout = () => {
  if (aboutTimer.current) clearTimeout(aboutTimer.current);
  setIsAboutOpen(true);
};
const closeAbout = () => {
  aboutTimer.current = setTimeout(() => setIsAboutOpen(false), 120);
};


  return (
    <header className="absolute left-0 top-0 w-full z-50">
      <div className="mx-auto w-full max-w-[1157px] px-[20px] md:px-[61.5px] pt-4">
        <div className="flex items-center justify-between">
          {/* LEFT Logo */}
          <Link href="/" className="w-28 px-1 py-[5px] flex items-center gap-2">
            <img className="w-24 h-12" src="./images/logo.png" alt="Rihal" />
          </Link>

          {/* CENTER Nav */}
          <nav className="w-[576px] px-3.5 py-1 bg-[#DFFCF9]/20 rounded-[32px]">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                // ✅ Products dropdown
                if (item.label === "Products") {
                  return (
                    <li key={item.href} className="relative">
                      <div
                        onMouseEnter={openProducts}
                        onMouseLeave={closeProducts}
                      >
                        <Link
                          href={item.href}
                          className={[
                            "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
                            "text-sm font-medium leading-5 text-white text-center transition",
                            isActive
                              ? "bg-[#DFFCF9]/40"
                              : "hover:bg-[#DFFCF9]/20",
                          ].join(" ")}
                        >
                          Products
                        </Link>

                        {isProductsOpen && (
                          <div
                            onMouseEnter={openProducts}
                            onMouseLeave={closeProducts}
                          >
                            <ProductsDropdown defaultActiveKey="siraaj" />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }

                // ✅ Services dropdown
                if (item.label === "Services") {
                  return (
                    <li key={item.href} className="relative">
                      <div
                        onMouseEnter={openServices}
                        onMouseLeave={closeServices}
                      >
                        <Link
                          href={item.href}
                          className={[
                            "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
                            "text-sm font-medium leading-5 text-white text-center transition",
                            isActive
                              ? "bg-[#DFFCF9]/40"
                              : "hover:bg-[#DFFCF9]/20",
                          ].join(" ")}
                        >
                          Services
                        </Link>

                        {isServicesOpen && (
                          <div
                            onMouseEnter={openServices}
                            onMouseLeave={closeServices}
                          >
                            <ServicesDropdown
                              defaultActiveKey="software"
                              previewImageSrc="/services-preview.jpg"
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }

                // ✅ Industries dropdown (الجديد)
                if (item.label === "Industries") {
                  return (
                    <li key={item.href} className="relative">
                      <div
                        onMouseEnter={openIndustries}
                        onMouseLeave={closeIndustries}
                      >
                        <Link
                          href={item.href}
                          className={[
                            "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
                            "text-sm font-medium leading-5 text-white text-center transition",
                            isActive
                              ? "bg-[#DFFCF9]/40"
                              : "hover:bg-[#DFFCF9]/20",
                          ].join(" ")}
                        >
                          Industries
                        </Link>

                        {isIndustriesOpen && (
                          <div
                            onMouseEnter={openIndustries}
                            onMouseLeave={closeIndustries}
                          >
                            <IndustriesDropdown
                              defaultActiveKey="energy"
                              // إذا ما عندك صورة خليها فاضية عادي
                              // previewImageSrc="/industries-preview.jpg"
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }

                // ✅ Resources dropdown
if (item.label === "Resources") {
  return (
    <li key={item.href} className="relative">
      <div onMouseEnter={openResources} onMouseLeave={closeResources}>
        <Link
          href={item.href}
          className={[
            "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
            "text-sm font-medium leading-5 text-white text-center transition",
            isActive ? "bg-[#DFFCF9]/40" : "hover:bg-[#DFFCF9]/20",
          ].join(" ")}
        >
          Resources
        </Link>

        {isResourcesOpen && (
          <div onMouseEnter={openResources} onMouseLeave={closeResources}>
            <ResourcesDropdown defaultActiveKey="news" />
          </div>
        )}
      </div>
    </li>
  );
}

// ✅ About dropdown
if (item.label === "About Us") {
  return (
    <li key={item.href} className="relative">
      <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
        <Link
          href={item.href}
          className={[
            "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
            "text-sm font-medium leading-5 text-white text-center transition",
            isActive ? "bg-[#DFFCF9]/40" : "hover:bg-[#DFFCF9]/20",
          ].join(" ")}
        >
          About Us
        </Link>

        {isAboutOpen && (
          <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
            <AboutDropdown defaultActiveKey="who" />
          </div>
        )}
      </div>
    </li>
  );
}



           
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "h-9 px-3.5 py-2 rounded-3xl flex items-center justify-center gap-1.5",
                        "text-sm font-medium leading-5 text-white text-center transition",
                        isActive ? "bg-[#DFFCF9]/40" : "hover:bg-[#DFFCF9]/20",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3.5">
            <button className="h-9 px-4 py-2 rounded-lg inline-flex items-center justify-center gap-1.5 text-sm font-medium leading-5 text-white hover:bg-[#DFFCF9]/20 transition">
              عربي
            </button>

            <Link
              href="/contact"
              className="w-32 h-10 px-3 bg-white rounded-2xl inline-flex items-center justify-center overflow-hidden"
            >
              <span className="text-sm font-medium leading-5 text-[#374151]">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
