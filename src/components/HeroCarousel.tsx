import { useEffect, useId, useMemo, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

type UrlModule = { default: string };

function normalizeBasename(url: string) {
  try {
    const clean = url.split("?")[0];
    const parts = clean.split("/");
    return parts[parts.length - 1] || clean;
  } catch {
    return url;
  }
}

export function HeroCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const frameId = useId();
  const [clientReady, setClientReady] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // No pré-render (SSG), import.meta.glob vira caminho /src/... que não existe em produção.
    // Só após montar no cliente as URLs viram /assets/... corretas no bundle.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount gate intencional para Netlify/SSG
    setClientReady(true);
  }, []);

  const images = useMemo(() => {
    if (!clientReady) return [];

    const png = import.meta.glob<UrlModule>("../assets/marmitex-images/*.png", {
      eager: true,
      query: "?url",
      import: "default",
    });
    const jpg = import.meta.glob<UrlModule>("../assets/marmitex-images/*.jpg", {
      eager: true,
      query: "?url",
      import: "default",
    });
    const jpeg = import.meta.glob<UrlModule>("../assets/marmitex-images/*.jpeg", {
      eager: true,
      query: "?url",
      import: "default",
    });
    const webp = import.meta.glob<UrlModule>("../assets/marmitex-images/*.webp", {
      eager: true,
      query: "?url",
      import: "default",
    });

    const urls = [...Object.values(png), ...Object.values(jpg), ...Object.values(jpeg), ...Object.values(webp)]
      .map((m) => m.default)
      .filter(Boolean);

    urls.sort((a, b) => normalizeBasename(a).localeCompare(normalizeBasename(b), undefined, { numeric: true }));
    return urls;
  }, [clientReady]);

  const count = images.length;

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (paused) return;
    if (count <= 1) return;

    const t = window.setInterval(() => {
      setActiveIdx((i) => (i + 1) % count);
    }, 4800);

    return () => window.clearInterval(t);
  }, [count, paused, prefersReducedMotion]);

  if (!clientReady || count === 0) {
    return <div className="heroMediaFoodPhoto heroMediaFoodPhoto--fallback" aria-hidden />;
  }

  const slideIdx = activeIdx % count;

  const goPrev = () => setActiveIdx((i) => (i - 1 + count) % count);
  const goNext = () => setActiveIdx((i) => (i + 1) % count);

  return (
    <div
      className="heroCarousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Fotos do marmitex"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="heroCarouselFrame" id={frameId}>
        {images.map((src, idx) => (
          <img
            key={src}
            className={`heroCarouselImg ${idx === slideIdx ? "isActive" : ""}`}
            src={src}
            alt=""
            aria-hidden={idx === slideIdx ? undefined : true}
            draggable={false}
            loading={idx === slideIdx ? "eager" : "lazy"}
          />
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="heroCarouselNav heroCarouselNav--prev"
            aria-label="Foto anterior"
            aria-controls={frameId}
            onClick={goPrev}
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            className="heroCarouselNav heroCarouselNav--next"
            aria-label="Próxima foto"
            aria-controls={frameId}
            onClick={goNext}
          >
            <span aria-hidden>›</span>
          </button>
          <div className="heroCarouselCounter" aria-label={`Foto ${slideIdx + 1} de ${count}`}>
            {slideIdx + 1}/{count}
          </div>
        </>
      ) : null}
    </div>
  );
}

