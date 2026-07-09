import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits a static `out/` folder that any CDN
  // (Cloudflare Pages) can serve directly, with no server runtime.
  output: "export",
};

export default nextConfig;
