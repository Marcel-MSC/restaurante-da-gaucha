import { useHead, useSeoMeta } from "@unhead/react";
import { MapEmbed } from "../components/MapEmbed";
import { MAPS_EMBED_URL, MAPS_URL, SITE_ORIGIN } from "../siteConstants";

export function LocalizacaoPage() {
  useSeoMeta({
    title: "Como chegar | Restaurante da Gaucha — Tatuapé / Vila Regente Feijó",
    description:
      "Endereço: Rua Júlio Alfredo Manuel, 41 — Vila Regente Feijó, São Paulo - SP. Self service à vontade perto do Tatuapé. Veja no Google Maps.",
    ogTitle: "Localização — Restaurante da Gaucha",
    ogDescription:
      "Rua Júlio Alfredo Manuel, 41 — Vila Regente Feijó. Seg–Sáb 11h–15h.",
    ogUrl: `${SITE_ORIGIN}/localizacao`,
  });

  useHead({
    link: [{ rel: "canonical", href: `${SITE_ORIGIN}/localizacao` }],
  });

  return (
    <section className="section" aria-label="Localização">
      <div className="container">
        <div className="kicker">Unidade</div>
        <h1 className="sectionTitle">Localização no Tatuapé</h1>
        <p className="sectionLead">
          Estamos na <strong>Vila Regente Feijó</strong>, com fácil acesso para quem vem
          do <strong>Tatuapé</strong> e redondezas. Use o mapa para traçar rota ou abrir
          direto no Google Maps.
        </p>
        <p className="sectionLead" style={{ marginTop: 12 }}>
          <strong>Endereço:</strong> Rua Júlio Alfredo Manuel, 41 — Vila Reg. Feijó,
          São Paulo - SP, 03336-030
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
  );
}
