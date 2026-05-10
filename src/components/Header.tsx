import { Link } from "react-router-dom";

type HeaderProps = {
  ifoodUrl: string
}

export function Header({ ifoodUrl }: HeaderProps) {
  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <Link
          to="/"
          aria-label="Ir para a página inicial"
          className="siteBrand"
        >
          <span className="siteBrandName">Restaurante da Gaucha</span>
          <span className="siteBrandTag">self service à vontade</span>
        </Link>

        <nav aria-label="Navegação" className="siteNav">
          <Link className="btn btnGhost" to="/sobre">
            Sobre
          </Link>
          <Link
            className="btn btnGhost"
            to={{ pathname: "/", hash: "comoFunciona" }}
          >
            Como pedir
          </Link>
          <Link className="btn btnGhost" to="/localizacao">
            Localização
          </Link>
          <a
            className="btn btnPrimary"
            href={ifoodUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Faça seu pedido no iFood (abre em nova aba)"
          >
            Faça seu pedido
          </a>
        </nav>
      </div>
    </header>
  )
}

