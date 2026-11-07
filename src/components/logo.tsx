export function Logo({ className = "text-[28px]" }: { className?: string }) {
  return (
    <span
      className={`flex items-baseline gap-1.5 font-display font-extrabold tracking-[-0.03em] text-ink ${className}`}
    >
      <span>no pink</span>
      <span className="text-plum line-through decoration-accent decoration-[3px]">
        tax
      </span>
    </span>
  );
}
