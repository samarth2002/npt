import { BagIcon, SearchIcon } from "./icons";
import { Logo } from "./logo";

const navLinks = [
  { label: "New in", href: "#new" },
  { label: "Bestsellers", href: "#new" },
  { label: "Gifts", href: "#new" },
  { label: "Our promise", href: "#promise" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
      <a href="#top" aria-label="No Pink Tax home">
        <Logo />
      </a>
      <nav aria-label="Main" className="flex flex-wrap gap-7 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Search"
          className="flex size-11 items-center justify-center rounded-full border-[1.5px] border-line bg-white transition-colors hover:border-dash"
        >
          <SearchIcon />
        </button>
        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-full bg-ink px-[18px] text-[15px] font-medium text-white transition-colors hover:bg-ink-soft"
        >
          <BagIcon size={18} />
          Bag (0)
        </button>
      </div>
    </header>
  );
}
