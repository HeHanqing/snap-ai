import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileButtonProps {
  className?: string;
  onClick?: () => void;
  title?: string;
}

const MobileButton = ({ className, onClick, title }: MobileButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "md:hidden rounded-full text-black w-full hover:bg-black hover:text-white",
        className
      )}
    >
      {title}
    </Button>
  );
};

export default MobileButton;
