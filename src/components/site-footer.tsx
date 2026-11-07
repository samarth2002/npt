import { Logo } from "./logo";

const columns = [
  {
    label: "Shop",
    links: [
      { label: "New in", href: "#new" },
      { label: "Bestsellers", href: "#new" },
      { label: "Gifts", href: "#new" },
    ],
  },
  {
    label: "Help",
    links: [
      { label: "Shipping", href: "#top" },
      { label: "Returns", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
  {
    label: "Follow",
    links: [
      { label: "Instagram", href: "#top" },
      { label: "Pinterest", href: "#top" },
      { label: "TikTok", href: "#top" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t-[1.5px] border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10 px-6 py-12">
        <div className="flex flex-[1_1_280px] flex-col gap-3">
          <Logo className="text-[26px]" />
          <p className="max-w-[22em] text-[15px] leading-[1.55] text-muted">
            Cute, trendy things for women — at the price they should be.
          </p>
        </div>
        {columns.map((col) => (
          <nav
            key={col.label}
            aria-label={col.label === "Follow" ? "Social" : col.label}
            className="flex flex-col gap-2.5 text-[15px]"
          >
            <span className="font-bold">{col.label}</span>
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 text-[13px] text-muted">
        © 2026 No Pink Tax
      </div>
    </footer>
  );
}
