import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center">
        <Image
          src={"/logo-text.svg"}
          alt="logo"
          width={110}
          height={32}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
