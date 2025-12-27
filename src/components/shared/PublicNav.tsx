// components/PublicNav.tsx

import Link from "next/link";
import ClientNavHeader from "./ClientNavHeader";
import ClientButton from "../modules/Home/Nav/ClientButton";
import PublicMobileNav from "../modules/Home/Nav/PublicMobileNav";
import { getCookie } from "@/services/auth/tokenHandler";

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "My Skills",
    href: "#skills",
  },
  {
    label: "My Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default async function PublicNav() {
  const accessToken = await getCookie("accessToken");
  console.log("access token from homepage: ", accessToken);

  return (
    <ClientNavHeader>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
          Hamza<span className="">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center  space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover: transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* {accessToken && (
            <Link
              href={"/profile"}
              className="text-sm font-medium hover: transition-colors"
            >
              Dashboard
            </Link>
          )}

          {accessToken ? (
            <LogoutBtn />
          ) : (
            <Link href="/login">
              <Button className=" rounded-md text-sm font-medium transition-colors">
                Login
              </Button>
            </Link>
          )} */}
        </nav>

        {/* Mobile Menu Button */}
        <ClientButton />
      </div>

      {/* Mobile Navigation */}
      <PublicMobileNav accessToken={accessToken ? accessToken : ""} />
    </ClientNavHeader>
  );
}
