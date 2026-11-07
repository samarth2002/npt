"use client";

import { useState } from "react";
import { HeartIcon, PlusIcon } from "./icons";
import { categories, products, type Product } from "@/lib/products";
import { ProductPhoto } from "./product-photo";

const filters = ["All", ...categories] as const;
type Filter = (typeof filters)[number];

export function NewIn() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="new"
      className="mx-auto flex max-w-7xl flex-col gap-9 px-6 pt-22 pb-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-2.5">
          <span className="text-sm font-bold tracking-[0.08em] text-berry-bright uppercase">
            Just landed
          </span>
          <h2 className="font-display text-[clamp(36px,4.4vw,56px)] leading-none font-extrabold tracking-[-0.035em]">
            New in &amp; loved
          </h2>
        </div>
        <div
          role="group"
          aria-label="Filter products"
          className="flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const pressed = filter === active;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(filter)}
                className={`h-11 rounded-full px-5 text-[15px] font-medium transition-colors ${
                  pressed
                    ? "bg-ink text-white"
                    : "border-[1.5px] border-line bg-white text-ink hover:border-dash"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-6 gap-y-7">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center pt-3">
        <a
          href="#new"
          className="rounded-full border-[1.5px] border-ink bg-white px-8 py-4 font-bold transition-colors hover:bg-ink hover:text-white"
        >
          View all products
        </a>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col gap-3.5">
      <ProductPhoto
        image={product.image}
        alt={product.name}
        sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
        className="aspect-[4/5] rounded-3xl"
      >
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 rounded-full bg-ink px-2.5 py-1.5 text-xs font-bold tracking-[0.06em] text-white uppercase">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-2.5 right-2.5 flex size-11 items-center justify-center rounded-full bg-white text-accent transition-transform hover:scale-105"
        >
          <HeartIcon />
        </button>
      </ProductPhoto>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-[17px] font-bold">{product.name}</h3>
          <span className="text-[15px] text-muted">{product.price}</span>
        </div>
        <button
          type="button"
          aria-label={`Add ${product.name} to bag`}
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-berry"
        >
          <PlusIcon />
        </button>
      </div>
    </article>
  );
}
