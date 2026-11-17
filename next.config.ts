import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // GitHub Pages can host static files only. Supabase provides the dynamic
  // application services (authentication, data, documents and AI functions).
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/StudySphere-AI" : "",
};

export default nextConfig;
