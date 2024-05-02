import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className = "flex items-center justify-between">
        <Image src="/logo.svg" width={100} height={100} alt="logo" />

        <ul className =" hidden md:flex gap-14 font-medium ">
          <li className="hover:text-primary ">Product</li>
          <li className="hover:text-primary">Pricing</li>
          <li className="hover:text-primary">Contact us</li>
          <li className="hover:text-primary">About us</li>
        </ul>

        <ul>
          <Button
          variant="ghost">
            Login</Button>
          <Button>Get started</Button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
