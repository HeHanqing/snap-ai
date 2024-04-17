"use client";

import Logo from "@/components/logo";
import { auth, useAuth } from "@clerk/nextjs";
import {
  Home,
  Image,
  ImagePlus,
  Paintbrush2,
  SmilePlus,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userId } = useAuth();
  const routes = [
    {
      label: "Home",
      icon: <Home className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}`,
    },
    {
      label: "Generate image",
      icon: <ImagePlus className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}/generate-image`,
    },
    {
      label: "AI-generated face",
      icon: <SmilePlus className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}/ai-generated-face`,
    },
    {
      label: "Enhance image",
      icon: <Sparkles className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}/enhance-image`,
    },
    {
      label: "Image colorization",
      icon: <Paintbrush2 className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}/image-colorization`,
    },
    {
      label: "Image debluring",
      icon: <Wand2 className="h-4 w-4 mr-2" />,
      href: `/dashboard/${userId}/image-debluring`,
    },
  ];

  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <div>
      <Logo />
      <div className="flex flex-col gap-2 mt-12">
        {routes.map((route) => (
          <Button
            key={route.label}
            onClick={() => onClick(route.href)}
            className={cn(
              "w-full font-normal text-base justify-start pl-6 mb-2 py-6  rounded-xl",
              pathname === route.href && "bg-neutral-700"
            )}
            variant="ghost"
          >
            <p>{route.icon}</p>
            <p>{route.label}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
