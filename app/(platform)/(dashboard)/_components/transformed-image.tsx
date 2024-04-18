import Image from "next/image";
import { useFormStatus } from "react-dom";

interface TransformedImageProps {
  image: string;
}

const TransformedImage = ({ image }: TransformedImageProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <div className="border-2 border-dotted rounded-3xl w-96 h-80 flex items-center justify-center text-neutral-500 relative overflow-hidden">
        {image === "" && !pending && <p>Transformed Image</p>}
        {pending && (
          <div className="flex flex-col items-center justify-center gap-2 ">
            <span className="loader"></span>
            <p>Generating...Please wait</p>
          </div>
        )}
        {image !== "" && !pending && (
          <Image
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Transformed Image"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default TransformedImage;
