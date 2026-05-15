import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const INDEXNOW_KEY = "d5ddc4c1c79668fc5f14c7a047fedbcd";
const SITE_HOST = "thefinanceverdict.com";
const SITE_URL = "https://thefinanceverdict.com";

export const GET: APIRoute = async () => {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);

  const urlList = articles
    .filter((article) => {
      const pub = new Date(article.data.publishedAt);
      return pub >= today && pub < tomorrow;
    })
    .map((article) => `${SITE_URL}/${article.slug}/`);

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
    count: urlList.length,
    generatedAt: new Date().toISOString(),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
