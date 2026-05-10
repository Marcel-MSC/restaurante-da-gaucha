import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHead, useSeoMeta } from "@unhead/react";
import { Hero } from "../components/Hero";
import { Sections } from "../components/Sections";
import { About } from "../components/About";
import { MapEmbed } from "../components/MapEmbed";
import {
  IFOOD_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  SITE_ORIGIN,
} from "../siteConstants";
import { restaurantJsonLd } from "../jsonLd/restaurant";

function scrollToRouteHash(hash: string) {
  const id = hash.replace(/^#/, "").trim();
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: prefersReduced ? "instant" : "smooth",
    block: "start",
  });
}

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    scrollToRouteHash(location.hash);
  }, [location.pathname, location.hash]);

  useSeoMeta({
    title: "Restaurante da Gaucha no Tatuapé | Self-service à vontade",
    description:
      "Restaurante da Gaucha em São Paulo (Vila Regente Feijó, Tatuapé): self service à vontade, iFood e pedido por WhatsApp. Horário Seg–Sáb 11h–15h.",
    ogTitle: "Restaurante da Gaucha no Tatuapé | Self-service à vontade",
    ogDescription:
      "Buffet self service à vontade na região do Tatuapé. Peça pelo iFood ou venha almoçar com a gente.",
    ogUrl: `${SITE_ORIGIN}/`,
    ogType: "website",
    twitterCard: "summary_large_image",
  });

  useHead({
    link: [{ rel: "canonical", href: `${SITE_ORIGIN}/` }],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(restaurantJsonLd),
      },
    ],
  });

  return (
    <>
      <Hero ifoodUrl={IFOOD_URL} />
      <About />
      <Sections ifoodUrl={IFOOD_URL} />
      <section id="localizacao" className="section" aria-label="Localização">
        <div className="container">
          <div className="kicker">Unidade</div>
          <h2 className="sectionTitle">Localização</h2>
          <p className="sectionLead">
            Estamos te esperando. Use o mapa abaixo para traçar rota ou abrir
            direto no Google Maps.
          </p>
          <div style={{ marginTop: 22 }}>
            <MapEmbed
              title="Restaurante da Gaucha no Google Maps"
              embedUrl={MAPS_EMBED_URL}
              mapsUrl={MAPS_URL}
            />
          </div>
        </div>
      </section>
    </>
  );
}
