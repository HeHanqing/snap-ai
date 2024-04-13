"use client";

import { cn } from "@/lib/utils";
import FeatureItem from "./feature-item";
import { bebas } from "@/fonts";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import ParallaxText from "./parallax-text";
import { features } from "@/lib/features-data";
import { useFeaturesIsActive } from "@/hooks/use-features-active";

const Features = () => {
  const text = "FEATURES";
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const ref = useRef(null);
  const isInView = useInView(ref);
  const toggleIsActive = useFeaturesIsActive((state) => state.toggleIsActive);

  useEffect(() => {
    toggleIsActive(isInView);
  }, [isInView, toggleIsActive]);

  return (
    <div ref={ref} className="md:mt-40 mt-20" id="features">
      <ParallaxText baseVelocity={-5}>{text}</ParallaxText>
      <div ref={container}>
        {features.map((feature, index) => {
          const targetScale = index === features.length - 1 ? 1 : 0.8;
          return (
            <FeatureItem
              key={index}
              progress={scrollYProgress}
              range={index / 6}
              targetScale={targetScale}
              feature={feature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
