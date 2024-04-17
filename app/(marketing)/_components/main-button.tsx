import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MainButton = () => {
  return (
    <Link href="sign-up">
      <button className="bg-white p-6 rounded-full group w-60 h-14 overflow-hidden">
        <div className="relative flex items-center gap-x-8 ">
          <ArrowRight
            size={18}
            className="absolute -left-1/2 group-hover:translate-x-24 transition duration-200 group-hover:scale-150 ease-in-out text-black"
          />
          <p className="font-medium text-base absolute left-0  group-hover:translate-x-12 transition duration-200 ease-in-out text-black">
            Get started now
          </p>
          <div className="absolute w-2 h-2 bg-black rounded-full  right-0 group-hover:scale-0 transition duration-200 " />
        </div>
      </button>
    </Link>
  );
};

export default MainButton;
