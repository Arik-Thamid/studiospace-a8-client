
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Aperture, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/studios", label: "Explore Studios" },
];

const menu = [
  ["/dashboard", "Dashboard"],
  ["/add-studio", "Add New Studio"],
  ["/my-listings", "My Studio Listings"],
  ["/my-bookings", "My Bookings"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold"
        >
          <Aperture className="h-6 w-6 text-accent" />
          StudioSpace
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "border-b-2 border-accent pb-1 font-medium"
                  : "text-muted hover:text-ink"
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-muted hover:text-ink">
              My Account
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="invisible absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-line bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {menu.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-page"
                >
                  {label}
                </Link>
              ))}

              <div className="my-2 border-t border-line" />

              <button className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-page">
                Logout
              </button>
            </div>
          </div>

          {/* Theme Icons */}
          <div className="flex items-center gap-2 rounded-md border border-line p-2">
            <Sun className="h-4 w-4" />
            <Moon className="h-4 w-4" />
          </div>

          <Link
            href="/login"
            className="text-muted hover:text-ink"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-accent px-4 py-2 text-white"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-md border border-line p-2 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-line bg-page px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="rounded-md px-3 py-2 text-sm hover:bg-card"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-line pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase text-muted">
                My Account
              </p>

              {menu.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-card"
                >
                  {label}
                </Link>
              ))}

              <button className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-card">
                Logout
              </button>
            </div>

            <div className="flex items-center gap-3 border-t border-line pt-3">
              <Sun className="h-5 w-5" />
              <Moon className="h-5 w-5" />
            </div>

            <div className="flex gap-3 border-t border-line pt-3">
              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className="flex-1 rounded-md border border-line px-4 py-2 text-center text-sm"
              >
                Log in
              </Link>

              <Link
                href="/register"
                onClick={() => setMobileMenu(false)}
                className="flex-1 rounded-md bg-accent px-4 py-2 text-center text-sm text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
