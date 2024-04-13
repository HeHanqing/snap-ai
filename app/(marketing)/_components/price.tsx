"use client";

import { Separator } from "@/components/ui/separator";
import { syne } from "@/fonts";
import { cn } from "@/lib/utils";
import PriceItem from "./price-item";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { usePriceIsActive } from "@/hooks/use-price-active";

const Price = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const toggleIsActive = usePriceIsActive((state) => state.toggleIsActive);

  useEffect(() => {
    toggleIsActive(isInView);
  }, [isInView, toggleIsActive]);

  return (
    <div
      className="mt-20 md:grid grid-cols-2 p-4 h-screen"
      id="price"
      ref={ref}
    >
      <Separator className="col-span-full" />
      <div className="flex justify-between mt-8">
        <p
          className={cn("font-extrabold md:text-5xl text-4xl", syne.className)}
        >
          Price
        </p>
      </div>
      <p className="font-medium md:text-lg mt-8 text-base">
        Everyone gets a free trial of ten times, after which they can pay by the
        number of times, and there are three plans that can be purchased
      </p>
      <div className="flex mt-20 md:col-start-2 flex-col gap-10">
        <PriceItem
          plan="Free"
          description="10 credits, unlimited models"
          price={0}
        />
        <PriceItem
          plan="Pro"
          description="100 credits, unlimited models"
          price={5.99}
          buttonTitle="buy plan"
        />
        <PriceItem
          plan="Max"
          description="1000 credits, unlimited models"
          price={49.9}
          buttonTitle="buy plan"
        />
      </div>
    </div>
  );
};

export default Price;
