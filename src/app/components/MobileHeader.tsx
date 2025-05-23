'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

interface MobileHeaderProps {
  items: NavItem[];
}

export default function MobileHeader({ items }: MobileHeaderProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Only render the menu after component is mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] mx-auto">
        <div className="relative bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-800/50">
          <div className="flex items-center justify-between px-6 h-28">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Pediu Logo"
                width={300}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <div className="h-24 w-24" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] mx-auto">
      <div className="relative bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-800/50">
        <div className="flex items-center justify-between px-6 h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pediu Logo"
              width={300}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-stone-200 hover:bg-stone-800/50 h-24 w-24 mr-[-12px]"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isOpen ? (
                  <X 
                    width={40}
                    height={40}
                    className="text-white" 
                    strokeWidth={2.5}
                    style={{ transform: 'scale(1.5)' }}
                  />
                ) : (
                  <Menu 
                    width={40}
                    height={40}
                    strokeWidth={2.5}
                    style={{ transform: 'scale(1.5)' }}
                  />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l border-stone-800 bg-black/95 backdrop-blur-md p-0">
              <div className="flex h-full flex-col">
                <SheetHeader className="border-b border-stone-800 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-xl font-semibold text-stone-50">Menu</SheetTitle>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-24 w-24 text-white hover:bg-stone-800/50 mr-[-12px]"
                      >
                        <X 
                          width={40}
                          height={40}
                          strokeWidth={2.5}
                          style={{ transform: 'scale(1.5)' }}
                        />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col divide-y divide-stone-800">
                    {items.map((item, i) => (
                      <div key={item.label} className="px-6 py-4">
                        {item.subItems ? (
                          <div role="group" aria-labelledby={`nav-group-${i}`}>
                            <h3
                              id={`nav-group-${i}`}
                              className="mb-3 text-sm font-medium text-stone-400"
                            >
                              {item.label}
                            </h3>
                            <div className="space-y-1.5">
                              {item.subItems.map((subItem) => (
                                <SheetClose asChild key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-500"
                                  >
                                    {subItem.label}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="flex items-center rounded-md px-3 py-2 text-base font-medium text-stone-100 transition-colors hover:bg-stone-800/50 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-500"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-stone-800 p-6">
                  <SheetClose asChild>
                    <Link
                      href="/signup"
                      className="flex h-12 w-full items-center justify-center rounded-xl bg-[#FFE41F] px-6 text-base font-medium text-black shadow transition-colors hover:bg-[#FFE41F]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE41F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                    >
                      Começar Agora
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 