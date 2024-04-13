import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <div>
      <span className={cn("border px-4 py-2 rounded-full", className)}>
        {children}
      </span>
    </div>
  );
};

export default Tag;
