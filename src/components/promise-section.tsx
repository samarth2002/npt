import { HeartIcon, StarIcon, TagIcon } from "./icons";

const points = [
  {
    Icon: TagIcon,
    title: "Fair pricing",
    body: "No markup for pink, sparkles or “for her”.",
  },
  {
    Icon: StarIcon,
    title: "Trend-first",
    body: "Fresh drops picked for what’s in right now.",
  },
  {
    Icon: HeartIcon,
    title: "Cute, on purpose",
    body: "Pretty and practical — made to be used daily.",
  },
];

export function PromiseSection() {
  return (
    <section id="promise" className="mx-auto max-w-7xl px-6 py-18">
      <div className="flex flex-wrap gap-12 rounded-[36px] bg-ink p-[clamp(32px,5vw,72px)] text-blush">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <span className="text-sm font-bold tracking-[0.08em] text-rose uppercase">
            Our promise
          </span>
          <h2 className="font-display text-[clamp(34px,4vw,52px)] leading-[1.02] font-extrabold tracking-[-0.035em]">
            The pink tax is real.
            <br />
            We just don&apos;t charge it.
          </h2>
          <p className="text-lg leading-[1.6] text-mist">
            The &ldquo;pink tax&rdquo; is the extra people pay when the same
            product is marketed to women. Our prices are set by what a product
            is — never by its colour or who it&apos;s for.
          </p>
        </div>

        <div className="grid min-w-0 flex-[1_1_420px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {points.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-2.5 rounded-3xl bg-ink-soft p-7"
            >
              <Icon className="text-rose" />
              <h3 className="text-[19px] font-bold">{title}</h3>
              <p className="text-[15px] leading-[1.55] text-mist">{body}</p>
            </div>
          ))}
          <div className="flex flex-col justify-between gap-4 rounded-3xl bg-accent p-7">
            <h3 className="font-display text-[26px] leading-[1.05] font-extrabold tracking-[-0.02em] text-white">
              Pink should never cost more.
            </h3>
            <a
              href="#new"
              className="text-[15px] font-bold text-white underline underline-offset-4"
            >
              Shop fair →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
