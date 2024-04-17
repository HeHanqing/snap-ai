"use client";

import { cn } from "@/lib/utils";
import Tag from "./tag";
import { syne } from "@/fonts";
import Image from "next/image";
import MainButton from "./main-button";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useHomeIsActive } from "@/hooks/use-home-active";

const tagItem = [
  "Generate image",
  "Image debluring",
  "AI-generated faces",
  "Image refiner",
  "Image colorization",
  "Background remove",
  "More to come",
];

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const toggleIsActive = useHomeIsActive((state) => state.toggleIsActive);

  useEffect(() => {
    toggleIsActive(isInView);
  }, [isInView, toggleIsActive]);

  return (
    <div
      ref={ref}
      className="md:grid grid-cols-2 gap-x-5 items-center justify-center mt-16 gap-y-10 flex flex-col md:px-8 md:mx-0"
    >
      <div className="flex flex-col md:gap-4 md:items-start justify-center items-center gap-8">
        <Tag>Awaken Youe Images</Tag>
        <h1
          className={cn(
            "font-bold md:text-6xl text-5xl text-center md:text-left lg:leading-[96px] lg:text-[84px] tracking-tighter ",
            syne.className
          )}
        >
          Unleash <br />
          your creative vision
        </h1>
        <MainButton />
        <p className="font-light text-sm md:text-base mt-4 md:text-left text-center px-4 md:px-0">
          The best AI image processing tools, very rich in features, using the
          most advanced AI image processing model, just click the button can be
          used for free!
        </p>
      </div>
      <div className="md:place-self-center md:p-0 p-4">
        <Image
          src={"/images/hero-img.png"}
          width={490}
          height={490}
          alt="hero-img"
          priority
        />
      </div>
      <div className="md:place-self-start md:col-span-2 ">
        <div className="lg:flex md:grid md:grid-cols-4 grid grid-cols-2 md:gap-2 gap-4 place-items-center">
          {tagItem.map((item, index) => (
            <Tag key={index} className="text-xs py-1">
              {item}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
