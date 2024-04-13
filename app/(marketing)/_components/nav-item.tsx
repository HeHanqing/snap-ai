import { cn } from "@/lib/utils";

interface NavItemProps {
  title: string;
  width?: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ title, width, isActive, onClick }: NavItemProps) => {
  return (
    <button
      className={cn("btn bg-opacity-0 text-base group relative w-24", width)}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute w-2 h-2 bg-white rounded-full left-0 group-hover:scale-100 transition duration-200",
          isActive ? "scale-100" : "scale-0"
        )}
      />
      <span className="span-mother">
        <span>{title}</span>
      </span>
      <span className="span-mother2">
        <span>{title}</span>
      </span>
    </button>
  );
};

export default NavItem;
