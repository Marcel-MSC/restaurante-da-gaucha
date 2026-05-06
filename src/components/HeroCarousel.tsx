import { useEffect, useMemo, useRef, useState } from "react";

type GlobUrlModule = { default: string };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const onChange = () => setReduced(mq.matches);
    onChange();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // Older Safari
    // eslint-disable-next-line deprecation/deprecation
    mq.addListener(onChange);
    // eslint-disable-next-line deprecation/deprecation
    return () => mq.removeListener(onChange);
  }, []);

  return reduced;
}

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
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionId = useRef(`hero-carousel-${Math.random().toString(16).slice(2)}`);

  const images = useMemo(() => {
    const modules = import.meta.glob<GlobUrlModule>("../assets/marmitex-images/*.{png,jpg,jpeg,webp}", {
      eager: true,
    });

    const urls = Object.values(modules)
      .map((m) => m.default)
      .filter(Boolean);

    urls.sort((a, b) => normalizeBasename(a).localeCompare(normalizeBasename(b), undefined, { numeric: true }));
    return urls;
  }, []);

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

  useEffect(() => {
    if (count === 0) return;
    setActiveIdx((i) => (i < count ? i : 0));
  }, [count]);

  if (count === 0) {
    return <div className="heroMediaFoodPhoto heroMediaFoodPhoto--fallback" aria-hidden />;
  }

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
      <div className="heroCarouselFrame" id={regionId.current}>
        {images.map((src, idx) => (
          <img
            key={src}
            className={`heroCarouselImg ${idx === activeIdx ? "isActive" : ""}`}
            src={src}
            alt=""
            aria-hidden={idx === activeIdx ? undefined : true}
            draggable={false}
            loading={idx === activeIdx ? "eager" : "lazy"}
          />
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            className="heroCarouselNav heroCarouselNav--prev"
            aria-label="Foto anterior"
            aria-controls={regionId.current}
            onClick={goPrev}
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            className="heroCarouselNav heroCarouselNav--next"
            aria-label="Próxima foto"
            aria-controls={regionId.current}
            onClick={goNext}
          >
            <span aria-hidden>›</span>
          </button>
          <div className="heroCarouselCounter" aria-label={`Foto ${activeIdx + 1} de ${count}`}>
            {activeIdx + 1}/{count}
          </div>
        </>
      ) : null}
    </div>
  );
}

