import { useMemo } from "react";

import { listHeroCarouselImageUrls } from "../assets/marmitex-images/carouselSources";
import { HeroCarousel } from "./HeroCarousel";

type HeroProps = {
  ifoodUrl: string;
};

export function Hero({ ifoodUrl }: HeroProps) {
  const hasHeroMedia = useMemo(
    () => listHeroCarouselImageUrls().length > 0,
    [],
  );

  return (
    <section id="topo" className="heroWrap">
      <div
        className={`container heroPaper${hasHeroMedia ? "" : " heroPaper--noMedia"}`}
      >
        {hasHeroMedia ? (
          <div className="heroMedia" aria-hidden="true">
            <div className="heroMediaInner">
              <div className="heroMediaBadge">Restaurante da Gaucha</div>
              <div className="heroMediaFood">
                <HeroCarousel />
              </div>
            </div>
          </div>
        ) : null}

        <div className="heroCopy">
          <div className="kicker">Self service à vontade</div>
          <h1 className="heroHeadline">
            O melhor do almoço <br />
            <span className="heroAccent">sem complicação</span>
          </h1>
          <p className="heroSub">
            Buffet caprichado e do seu jeito. Seg–Sáb, das 11:00 às 15:00.
          </p>

          <div className="heroCtas">
            <a
              className="btn btnPrimary"
              href={ifoodUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Pedir no iFood (abre em nova aba)"
            >
              Faça seu pedido
            </a>
            <a className="btn btnGhost" href="#comoFunciona">
              Ver como funciona
            </a>
          </div>

          <div className="heroMeta">
            <span className="pill">Almoço • 11:00–15:00</span>
            <span className="pill">Self service à vontade</span>
            <span className="pill">Entrega e retirada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
