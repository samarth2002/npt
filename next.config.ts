import type { NextConfig } from "next";

// Set GITHUB_PAGES=true to build a static site for https://<user>.github.io/npt
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/npt" : "";

const nextConfig: NextConfig = {
  // Both need a server, so they are off for the static export.
  cacheComponents: !isGitHubPages,
  partialPrefetching: !isGitHubPages,
  ...(isGitHubPages && { output: "export", basePath }),
  env: {
    // next/image does not prefix basePath onto `src`, so components need it.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    // A static export has no server to optimize images; the source files are
    // already AVIF, so serve them as-is there.
    unoptimized: isGitHubPages,
    // Otherwise serve AVIF where supported, WebP elsewhere.
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
