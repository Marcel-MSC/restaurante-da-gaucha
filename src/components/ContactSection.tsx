import { Link } from "react-router-dom";
import { IFOOD_URL, INSTAGRAM_URL } from "../siteConstants";

export function ContactSection() {
  return (
    <section id="contato" className="section" aria-label="Contato">
      <div className="container">
        <div className="kicker">Contato</div>
        <h2 className="sectionTitle">Como falar com a gente</h2>
        <p className="sectionLead">
          Horário de funcionamento: <strong>Segunda à Sábado • 11:00–15:00</strong>.
        </p>

        <div className="grid3" style={{ marginTop: 22 }}>
          <div className="card">
            <h3>Instagram</h3>
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
            <h3>iFood</h3>
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
            <h3>Presencial</h3>
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
