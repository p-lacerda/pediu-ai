'use client';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

interface NavDropdownProps {
  items: NavItem[];
}

export default function NavDropdown({ items }: NavDropdownProps) {
  return (
    <nav className="hidden md:flex gap-8">
      {items.map((item) =>
        item.subItems ? (
          <div key={item.label} className="relative group">
            <button className="text-white hover:text-[#FFE41F] flex items-center gap-1">
              {item.label}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full mt-2 w-48 bg-stone-950/95 backdrop-blur-md rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {item.subItems.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-2 text-white hover:text-[#FFE41F] hover:bg-stone-800/50"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-white hover:text-[#FFE41F]"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
