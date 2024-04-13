import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <div className="w-full px-10 pt-10 relative  ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <NavItems />
        <Button title="Try now" />
      </div>
    </div>
  );
};

export default Navbar;
