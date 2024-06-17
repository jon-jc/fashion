import { MountainSnowIcon, ShirtIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image
          src="/logo.png"
          alt="Product Image"
          width={80}
          height={80}
          className="rounded-lg object-cover pt-10"
        />
        <span className="sr-only">Avant Garde Fashion</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="/cart"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
