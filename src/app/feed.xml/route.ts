import { getAllContent } from "@/content";
import { siteConfig } from "@/lib/site-config";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = getAllContent()
    .slice(0, 30)
    .map((item) => {
      const url =
        item.format === "note"
          ? `${siteConfig.url}/notes/${item.slug}`
          : `${siteConfig.url}/${item.rubrique}/${item.slug}`;
      return `
    <item>
      <title>${escapeXml(item.titre)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.excerpt)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>fr-FR</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
