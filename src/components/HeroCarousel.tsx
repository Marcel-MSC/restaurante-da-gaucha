import { useEffect, useId, useMemo, useState } from "react";

import { listHeroCarouselImageUrls } from "../assets/marmitex-images/carouselSources";

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

export function HeroCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const frameId = useId();
  const [clientReady, setClientReady] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Evita emitir URLs /src/... no HTML estático; no cliente o bundle usa /assets/...
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount gate intencional para Netlify/SSG
    setClientReady(true);
  }, []);

  const slideUrls = useMemo(() => listHeroCarouselImageUrls(), []);

  const images = useMemo(() => (clientReady ? slideUrls : []), [clientReady, slideUrls]);

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

  if (!clientReady) {
    return <div className="heroCarousel" aria-hidden />;
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
            loading="eager"
            decoding="async"
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
          <div
            className="heroCarouselCounter"
            aria-label={`Foto ${slideIdx + 1} de ${count}`}
          >
            {slideIdx + 1}/{count}
          </div>
        </>
      ) : null}
    </div>
  );
}
