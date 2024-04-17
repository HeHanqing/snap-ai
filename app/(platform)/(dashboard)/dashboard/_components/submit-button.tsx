import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  className?: string;
  isLoading?: boolean;
}

const SubmitButton = ({ className, isLoading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending || isLoading}
      type="submit"
      className={cn("submit disabled:opacity-100", className)}
    >
      {pending ? "Generating..." : "Generate image"}
    </Button>
  );
};

export default SubmitButton;
