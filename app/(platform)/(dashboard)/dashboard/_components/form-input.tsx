import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import FormErrors from "./form-eroors";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

const FormInput = ({
  id,
  name,
  placeholder,
  type,
  label,
  errors,
  className,
  disabled,
  defaultValue,
  onBlur,
}: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div className="grid w-full items-center gap-2 ">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="prompt" className="text-lg">
          {label}
        </Label>
        <Input
          disabled={pending || disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          className={cn(
            "bg-black text-neutral-500 placeholder:text-neutral-500",
            className
          )}
        />
      </div>
      <FormErrors id={id} errors={errors} />
    </div>
  );
};

export default FormInput;
