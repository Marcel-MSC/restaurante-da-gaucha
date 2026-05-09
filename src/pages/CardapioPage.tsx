import { useHead, useSeoMeta } from "@unhead/react";
import { Sections } from "../components/Sections";
import { IFOOD_URL, SITE_ORIGIN } from "../siteConstants";

export function CardapioPage() {
  useSeoMeta({
    title: "Cardápio e buffet | Restaurante da Gaucha (Tatuapé)",
    description:
      "Self service à vontade no Tatuapé: buffet com variedade, almoço Seg–Sáb 11h–15h. Peça também pelo iFood.",
    ogTitle: "Cardápio e buffet | Restaurante da Gaucha",
    ogDescription:
      "Buffet self service à vontade na Vila Regente Feijó. Veja como pedir no site.",
    ogUrl: `${SITE_ORIGIN}/cardapio`,
  });

  useHead({
    link: [{ rel: "canonical", href: `${SITE_ORIGIN}/cardapio` }],
  });

  return (
    <section className="section" aria-label="Cardápio">
      <div className="container">
        <div className="kicker">Cardápio</div>
        <h1 className="sectionTitle">Buffet self service à vontade</h1>
        <p className="sectionLead">
          O menu do dia varia (sempre com opções quentinhas e acompanhamentos), mas a
          proposta é uma só: montar o prato do seu jeito e repetir com tranquilidade —
          aqui na região do <strong>Tatuapé</strong>, na{" "}
          <strong>Vila Regente Feijó</strong>.
        </p>
        <p className="sectionLead" style={{ marginTop: 14 }}>
          Prefere delivery? Use o botão do iFood no topo ou no bloco “Como pedir” abaixo.
        </p>
        <div style={{ marginTop: 28 }}>
          <Sections ifoodUrl={IFOOD_URL} />
        </div>
      </div>
    </section>
  );
}
