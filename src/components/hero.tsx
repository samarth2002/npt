import { ArrowRightIcon } from "./icons";
import { heroPhotos } from "@/lib/products";
import { ProductPhoto } from "./product-photo";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-7xl flex-wrap items-center gap-12 px-6 pt-10 pb-18"
    >
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-6">
        <span className="self-start rounded-full bg-petal px-3.5 py-2 text-sm font-bold tracking-[0.04em] text-berry uppercase">
          New drop is live
        </span>
        <h1 className="font-display text-[clamp(44px,6.4vw,88px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
          Cute things.
          <br />
          Fair prices.
          <br />
          <span className="text-accent">Zero pink tax.</span>
        </h1>
        <p className="max-w-[30em] text-[19px] leading-[1.55] text-muted">
          Trendy little things you&apos;ll actually use — priced like they
          should be, not higher because they&apos;re pink.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#new"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 font-bold text-white transition-colors hover:bg-berry"
          >
            Shop the drop
            <ArrowRightIcon size={18} />
          </a>
          <a
            href="#promise"
            className="rounded-full border-[1.5px] border-line bg-white px-7 py-4 font-bold transition-colors hover:border-dash"
          >
            What&apos;s the pink tax?
          </a>
        </div>
      </div>

      <div className="grid min-w-0 flex-[1_1_480px] grid-cols-2 gap-4">
        <ProductPhoto
          {...heroPhotos.main}
          preload
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 45vw, 100vw"
          className="row-span-2 min-h-[520px] rounded-[28px]"
        />
        <ProductPhoto
          {...heroPhotos.top}
          sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
          className="min-h-[252px] rounded-[28px]"
        />
        <ProductPhoto
          {...heroPhotos.bottom}
          sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
          className="min-h-[252px] rounded-[28px]"
        />
      </div>
    </section>
  );
}
