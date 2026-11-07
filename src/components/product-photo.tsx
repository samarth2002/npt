import Image from "next/image";

/** Rounded, cropped product photo tile. Overlays go in `children`. */
export function ProductPhoto({
  image,
  alt,
  sizes,
  preload,
  className = "",
  children,
}: {
  /** Path under /public, e.g. "/products/lemon-keychain.avif". */
  image: string;
  alt: string;
  sizes: string;
  preload?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-petal ${className}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}${image}`}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
      {children}
    </div>
  );
}
