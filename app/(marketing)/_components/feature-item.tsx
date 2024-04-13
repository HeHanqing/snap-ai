"use client";
import { syne } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import { FeatureProps } from "@/lib/features-data";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

import Button from "./button";
import MobileButton from "./mobile-button";

interface FeatureItemProps {
  progress: MotionValue<number>;
  range: number;
  targetScale: number;
  feature: FeatureProps;
}

const FeatureItem = ({
  progress,
  range,
  targetScale,
  feature,
}: FeatureItemProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [range, 1], [1, targetScale]);

  return (
    <motion.div style={{ scale }} className="h-screen py-10 sticky top-0">
      <div
        ref={container}
        className={cn(
          "h-full bg-white rounded-2xl grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-hidden transition m-4"
        )}
      >
        <div className="flex flex-col md:m-16 m-8 md:w-8/12 justify-between">
          <div>
            <p
              className={cn(
                "text-black font-bold tracking-tight md:text-4xl text-2xl",
                syne.className
              )}
            >
              {feature.title}
            </p>
            <p className="leading-5 text-gray-500 md:mt-4 md:text-base text-sm">
              {feature.description}
            </p>
          </div>
          <div>
            <p
              className={cn(
                "text-black font-bold tracking-tight md:text-4xl text-2xl",
                syne.className
              )}
            >
              {feature.prompt}
            </p>
            <p className="leading-5 text-gray-500 text-sm md:text-base md:mt-4 md:mb-8 mb-2">
              {feature.detail}
            </p>
            <Button outlined title="Try this" isFeaturesButton />
            <MobileButton title="try this model" className="mt-2 " />
          </div>
        </div>

        <div className="w-full h-full overflow-hidden">
          <motion.div
            style={{ scale: imageScale }}
            className="w-full h-full flex justify-center items-center"
          >
            {!feature.beforeImage ? (
              <Image
                src={feature.afterImage}
                alt="generate image"
                fill
                className="object-cover"
              />
            ) : (
              <ImgComparisonSlider hover={true} className="outline-none ">
                <img
                  slot="first"
                  src={feature.beforeImage}
                  className="w-full h-full"
                />

                <img
                  slot="second"
                  src={feature.afterImage}
                  className=" w-full h-full"
                />
              </ImgComparisonSlider>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
