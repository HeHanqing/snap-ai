import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileButtonProps {
  className?: string;
  title?: string;
}

const MobileButton = ({ className, title }: MobileButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "md:hidden rounded-full text-black w-full hover:bg-black hover:text-white",
        className
      )}
    >
      <Link href="/sign-up">{title}</Link>
    </Button>
  );
};

export default MobileButton;
