"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <Image
        src="/logopagprincipal.svg"
        width={133}
        height={39}
        alt="finance ia"
      />
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className={
            pathname == "/" ? "font-bold text-primary" : "text-muted-foreground"
          }
        >
          Dashboads
        </Link>
        <Link
          href="/transactions"
          className={
            pathname == "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname == "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assianturas
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
