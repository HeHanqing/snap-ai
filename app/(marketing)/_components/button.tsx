import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  title: string;
  outlined?: boolean;
  color?: string;
  isFeaturesButton?: boolean;
}

const Button = ({
  outlined,
  title,
  color = "black",
  isFeaturesButton = false,
}: ButtonProps) => {
  return (
    <Link href="/sign-up">
      <button
        className={cn(
          "bg-white p-6 rounded-full group w-40 h-16 overflow-hidden",
          outlined && `bg-opacity-0 border border-${color}`,
          isFeaturesButton && "hidden md:block"
        )}
      >
        <div className="relative flex items-center gap-x-8 ">
          <ArrowRight
            size={18}
            className={cn(
              "absolute -left-1/2 group-hover:translate-x-14 transition duration-200 group-hover:scale-150 ease-in-out ",
              `text-${color}`
            )}
          />
          <p
            className={cn(
              "text-base absolute left-0  group-hover:translate-x-12 transition duration-200 ease-in-out ",
              `text-${color}`
            )}
          >
            {title}
          </p>
          <div
            className={cn(
              "absolute w-2 h-2  rounded-full  right-0 group-hover:scale-0 transition duration-200 ",
              `bg-${color}`
            )}
          />
        </div>
      </button>
    </Link>
  );
};

export default Button;
