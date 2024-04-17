import { Separator } from "@/components/ui/separator";
import Button from "./button";
import MainButton from "./main-button";
import MobileButton from "./mobile-button";

interface PriceItemProps {
  plan: string;
  price: number;
  description: string;
  buttonTitle?: string;
}

function formatPrice(description: string): [string, string] | null {
  const digits = description.match(/\d+(\.\d+)?/g);
  if (!digits) return null;
  const rest = description.replace(digits[0] as string, "");
  return [digits[0], rest];
}

const PriceItem = ({
  plan,
  price,
  description,
  buttonTitle = "try free",
}: PriceItemProps) => {
  const [digits, rest] = formatPrice(description) as [string, string];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-2xl md:text-2xl lg:text-4xl">
        <p className="font-medium">{plan} Plan</p>
        <p className="relative font-medium ">
          <span className="absolute top-0 -translate-x-full text-sm">US</span>$
          {price}
        </p>
        <Button
          outlined={true}
          title={buttonTitle}
          color="white"
          isFeaturesButton
        />
        <MobileButton
          className="w-28 bg-opacity-0 text-white hover:bg-white hover:text-black"
          title={buttonTitle}
        />
      </div>
      <p className="text-gray-500">
        Includes{" "}
        <span className="text-red-600 font-bold text-xl">{digits}</span>
        {rest}
      </p>
      <Separator className="mt-4" />
    </div>
  );
};

export default PriceItem;
