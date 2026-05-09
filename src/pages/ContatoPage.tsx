import { useHead, useSeoMeta } from "@unhead/react";
import { Link } from "react-router-dom";
import {
  IFOOD_URL,
  INSTAGRAM_URL,
  SITE_ORIGIN,
} from "../siteConstants";

export function ContatoPage() {
  useSeoMeta({
    title: "Contato e pedidos | Restaurante da Gaucha",
    description:
      "Fale com o Restaurante da Gaucha: Instagram, iFood e horário Seg–Sáb 11h–15h. Self service à vontade na Vila Regente Feijó.",
    ogTitle: "Contato — Restaurante da Gaucha",
    ogUrl: `${SITE_ORIGIN}/contato`,
  });

  useHead({
    link: [{ rel: "canonical", href: `${SITE_ORIGIN}/contato` }],
  });

  return (
    <section className="section" aria-label="Contato">
      <div className="container">
        <div className="kicker">Contato</div>
        <h1 className="sectionTitle">Como falar com a gente</h1>
        <p className="sectionLead">
          Horário de funcionamento: <strong>Segunda à Sábado • 11:00–15:00</strong>.
        </p>

        <div className="grid3" style={{ marginTop: 22 }}>
          <div className="card">
            <h2>Instagram</h2>
            <p>Acompanhe novidades e o dia a dia da cozinha.</p>
            <div style={{ marginTop: 14 }}>
              <a
                className="btn btnGhost"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                Abrir Instagram
              </a>
            </div>
          </div>
          <div className="card">
            <h2>iFood</h2>
            <p>Peça pelo app quando não der pra vir presencialmente.</p>
            <div style={{ marginTop: 14 }}>
              <a
                className="btn btnPrimary"
                href={IFOOD_URL}
                target="_blank"
                rel="noreferrer"
              >
                Abrir iFood
              </a>
            </div>
          </div>
          <div className="card">
            <h2>Presencial</h2>
            <p>
              Prefere almoçar aqui? Venha no self service à vontade — veja também a
              página de localização.
            </p>
            <div style={{ marginTop: 14 }}>
              <Link className="btn btnGhost" to="/localizacao">
                Ver localização
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
