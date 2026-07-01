"use client";

import { useState } from "react";
import Link from "next/link";
import { NavLink, NavLinkMobile } from "./NavLinks";
import { navLinks } from "@/shared/config/nav";
import { Logo } from "@/shared/ui/Logo/Logo";
import { Search } from "./search";
import { Icons } from "./NavIcons";
import { BasketIcon, UserIcon, HeartIcon } from "@/shared/ui/Icon/Icon";
import { Container } from "@/shared/ui/Container/Container";
import { useCartStore } from "@/features/cart/model/store";
import { useAuthStore } from "@/features/auth/model/useAuthStore";

export function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const { items } = useCartStore();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("nexus_user");
    localStorage.removeItem("user-profile-storage");
  };

  const isAdmin = user?.role === "admin";
  const accountHref = isAdmin ? "/admin" : "/account";
  const accountLabel = isAdmin ? "Admin" : "Account";

  const UserMenu = () =>
    user ? (
      <>
        <li>
          <Link href={accountHref}>{accountLabel}</Link>
        </li>
        <li onClick={handleLogout} className="cursor-pointer">
          Logout
        </li>
      </>
    ) : (
      <li>
        <Link href="/auth">Login</Link>
      </li>
    );

  return (
    <nav className="bg-white/92 border-b border-black/6 top-0 z-50 backdrop-blur relative">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Logo />

            <div className="md:flex items-center gap-8 text-sm text-gray-500 hidden">
              {navLinks.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>
          </div>

          {/* Desktop right actions */}
          <div className="md:flex items-center gap-6 hidden">
            <Search />

            <div className="flex items-center gap-4 text-white">
              <Link href="/favourite">
                <Icons>
                  <HeartIcon fill="#16213E" />
                </Icons>
              </Link>
              <Link href="/cart">
                <Icons>
                  <BasketIcon cartCount={items.length} />
                </Icons>
              </Link>

              <div className="relative group">
                <Icons>
                  <UserIcon />
                </Icons>
                <ul
                  className="p-2.5 text-black absolute right-0 mt-3 w-40
                    bg-white shadow-lg rounded-md border
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-150"
                >
                  <UserMenu />
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center md:hidden">
            <Icons>
              <HeartIcon fill="#16213E" />
            </Icons>
            <Icons>
              <BasketIcon cartCount={items.length} />
            </Icons>
            <div
              className="bg-[url(/svg/burger-menu.svg)] w-5 h-5 bg-cover ml-2.5 cursor-pointer"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {showMenu && (
                <div className="absolute flex items-center flex-col right-0 mt-6 w-48 text-gray-800 bg-white shadow-xl rounded-xl p-4 border border-gray-200 animate-fade">
                  {navLinks.map((link) => (
                    <NavLinkMobile
                      key={link.label}
                      label={link.label}
                      href={link.href}
                    />
                  ))}
                  <div className="w-full text-left mt-2">
                    {user ? (
                      <>
                        <Link href={accountHref} className="block py-1">
                          {accountLabel}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block py-1 cursor-pointer w-full text-left"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link href="/auth" className="block py-1">
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
