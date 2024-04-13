"use client";

import { useHomeIsActive } from "@/hooks/use-home-active";
import NavItem from "./nav-item";
import { useFeaturesIsActive } from "@/hooks/use-features-active";
import { usePriceIsActive } from "@/hooks/use-price-active";

const NavItems = () => {
  const homeIsActive = useHomeIsActive((state) => state.homeIsActive);
  const featuresIsActive = useFeaturesIsActive(
    (state) => state.featuresIsActive
  );
  const priceIsActive = usePriceIsActive((state) => state.priceIsActive);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToFeatures = () => {
    const features = document.getElementById("features");
    features?.scrollIntoView({ behavior: "smooth" });
  };

  const backToPrice = () => {
    const price = document.getElementById("price");
    price?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="left-1/2 text-white -translate-x-1/2 hidden md:flex gap-4 fixed bg-black px-6 py-4 rounded-full bg-opacity-30 backdrop-blur-md z-50">
      <NavItem
        title="Home"
        width="w-20"
        onClick={backToTop}
        isActive={homeIsActive}
      />
      <NavItem
        title="Features"
        isActive={featuresIsActive}
        onClick={backToFeatures}
      />
      <NavItem
        title="Price"
        width="w-20"
        onClick={backToPrice}
        isActive={priceIsActive}
      />
    </div>
  );
};

export default NavItems;
