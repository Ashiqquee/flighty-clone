import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Press", href: "/press" },
  { name: "Support", href: "/help" },
  { name: "Gift Cards", href: "/gift-cards" },
  { name: "Businesses", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://web-assets.same.dev/226990655/1663159426.png"
            alt="Flighty Logo"
            width={130}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="https://apps.apple.com/app/apple-store/id1358823008" className="hidden md:block">
          <Button className="bg-white text-[#0e0b17] hover:bg-white/90 font-medium rounded-full px-6">
            Get the app
          </Button>
        </Link>

        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
