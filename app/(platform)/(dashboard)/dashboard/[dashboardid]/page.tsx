import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { syne } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-between ml-10 w-full">
      <p className={cn("font-bold text-7xl tracking-tight", syne.className)}>
        Unleash <br /> your creative vision
      </p>
      <div className="flex flex-col gap-4">
        <p className={cn("font-bold text-7xl tracking-tight", syne.className)}>
          Recent edits
        </p>
        <Input className="bg-black rounded-lg focus-visible:ring-0" />
        <ScrollArea className="h-60 w-full mt-8 ">
          <div className="grid grid-cols-4 gap-4 h-60">
            <div className="col-span-2 w-full relative h-60 rounded-lg overflow-hidden">
              <Image
                fill
                src="/images/after-colorization.png"
                alt="snap-ai"
                className="object-cover"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                fill
                src="/images/after-colorization.png"
                alt="snap-ai"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DashboardPage;
