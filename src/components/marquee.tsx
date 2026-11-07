import { Fragment } from "react";

const words = ["cute", "trendy", "fairly priced", "made for her", "no pink tax"];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-accent px-6 py-[18px] text-white">
      <div className="flex flex-wrap justify-center gap-x-9 gap-y-3 font-display text-[22px] font-bold tracking-[-0.01em] lowercase">
        {words.map((word, i) => (
          <Fragment key={word}>
            {i > 0 && <span aria-hidden="true">✦</span>}
            <span>{word}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
