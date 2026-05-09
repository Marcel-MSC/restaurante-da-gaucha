type UrlModule = { default: string };

/** Com `query: '?url'` + `import: 'default'` + `eager`, o Vite pode expor string ou `{ default: string }`. */
export function urlFromGlobModule(entry: string | UrlModule): string {
  if (typeof entry === "string") return entry;
  return entry.default ?? "";
}

function sortByBasename(urls: string[]) {
  const basename = (url: string) => {
    try {
      const clean = url.split("?")[0];
      const parts = clean.split("/");
      return parts[parts.length - 1] || clean;
    } catch {
      return url;
    }
  };
  return [...urls].sort((a, b) => basename(a).localeCompare(basename(b), undefined, { numeric: true }));
}

/** Todas as imagens raster nesta pasta (subpastas inclusas), para o hero carousel. */
export function getMarmitexFolderImageUrls(): string[] {
  const png = import.meta.glob<string | UrlModule>("./**/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const jpg = import.meta.glob<string | UrlModule>("./**/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const jpeg = import.meta.glob<string | UrlModule>("./**/*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const webp = import.meta.glob<string | UrlModule>("./**/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const raw = [...Object.values(png), ...Object.values(jpg), ...Object.values(jpeg), ...Object.values(webp)]
    .map(urlFromGlobModule)
    .filter(Boolean);

  const seen = new Set<string>();
  const unique = raw.filter((u) => {
    if (seen.has(u)) return false;
    seen.add(u);
    return true;
  });

  const sorted = sortByBasename(unique);

  return sorted;
}

/** Pasta `marmitex-images` + `hero.png` na raiz de `assets` — mesma lista do carrossel. */
export function listHeroCarouselImageUrls(): string[] {
  const folderUrls = getMarmitexFolderImageUrls();

  const heroOnly = import.meta.glob<string | UrlModule>("../hero.png", {
    eager: true,
    query: "?url",
    import: "default",
  });
  const heroUrls = Object.values(heroOnly).map(urlFromGlobModule).filter(Boolean);

  const urlsRaw = [...folderUrls, ...heroUrls];
  const seenUrl = new Set<string>();
  return urlsRaw.filter((u) => {
    if (seenUrl.has(u)) return false;
    seenUrl.add(u);
    return true;
  });
}
