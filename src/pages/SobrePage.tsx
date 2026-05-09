import { useHead, useSeoMeta } from "@unhead/react";
import { About } from "../components/About";
import { SITE_ORIGIN } from "../siteConstants";

export function SobrePage() {
  useSeoMeta({
    title: "Sobre nós | Restaurante da Gaucha",
    description:
      "Conheça o Restaurante da Gaucha: self service à vontade na Vila Regente Feijó (Tatuapé), buffet caprichado e almoço Seg–Sáb.",
    ogTitle: "Sobre nós — Restaurante da Gaucha",
    ogUrl: `${SITE_ORIGIN}/sobre`,
  });

  useHead({
    link: [{ rel: "canonical", href: `${SITE_ORIGIN}/sobre` }],
  });

  return (
    <>
      <About />
      <section className="section" aria-label="Região atendida">
        <div className="container">
          <div className="kicker">Região</div>
          <h2 className="sectionTitle">Atendimento na região do Tatuapé</h2>
          <p className="sectionLead">
            Estamos na <strong>Vila Regente Feijó</strong>, com ótimo acesso para quem
            trabalha ou mora perto do <strong>Tatuapé</strong> e busca um almoço
            caprichado, rápido e com variedade no buffet.
          </p>
        </div>
      </section>
    </>
  );
}
