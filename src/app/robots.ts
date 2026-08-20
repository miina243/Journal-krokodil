import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { crawlerPolicy } from "@/lib/crawler-policy";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...crawlerPolicy.map((rule) => ({
        userAgent: rule.userAgent,
        [rule.allow ? "allow" : "disallow"]: "/",
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
