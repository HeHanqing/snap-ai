import { cn } from "@/lib/utils";
import { syne } from "@/fonts";
import GenerateImageForm from "./_components/generate-image-form";

const GenerateImagePage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <p className={cn("font-bold text-7xl tracking-tight", syne.className)}>
        Generate image
      </p>
      <p className="text-neutral-500 my-4 text-sm">
        Just type in the text and generate unlimited creative images. The more
        detailed the description, the more accurate the generated image.
      </p>
      <GenerateImageForm />
    </div>
  );
};

export default GenerateImagePage;
