"use client";

export function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 pb-24">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-[36px] bg-petal p-[clamp(32px,5vw,64px)]">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3">
          <h2 className="font-display text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            Be first to the next drop
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted">
            New arrivals, restocks and little surprises. No spam, ever.
          </p>
        </div>
        {/* TODO: wire up to a newsletter provider. */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex min-w-0 flex-[1_1_400px] flex-col gap-2"
        >
          <label htmlFor="email" className="text-sm font-bold">
            Email address
          </label>
          <div className="flex flex-wrap gap-2.5">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="h-13 min-w-0 flex-[1_1_220px] rounded-full border-[1.5px] border-dash bg-white px-5 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="h-13 rounded-full bg-ink px-7 font-bold text-white transition-colors hover:bg-ink-soft"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
