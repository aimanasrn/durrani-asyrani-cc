import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with the final production domain once confirmed by the centre owner
  const baseUrl = "https://taskadurraniasyirani.com.my"; 
  const locales = ["ms", "en"];
  const paths = [
    "",
    "/about",
    "/programmes",
    "/activities",
    "/facilities",
    "/gallery",
    "/parent-information",
    "/contact",
    "/registration",
    "/privacy"
  ];

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      const isHome = path === "";
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: isHome ? 1.0 : 0.8
      });
    });
  });

  return entries;
}
