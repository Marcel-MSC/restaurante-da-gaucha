import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type HeaderProps = {
  ifoodUrl: string
}

export function Header({ ifoodUrl }: HeaderProps) {
  const navigate = useNavigate()
  const location = useLocation()

  /** Volta ao hero como primeira visita: limpa hash na home e rola ao topo. */
  const goToHomeTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname === "/" && location.hash) {
      navigate({ pathname: "/", hash: "" }, { replace: true })
    } else if (location.pathname !== "/") {
      navigate("/")
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    })
  }

  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <Link
          to="/"
          onClick={goToHomeTop}
          aria-label="Ir para o início da página (hero)"
          className="siteBrand"
        >
          <span className="siteBrandName">Restaurante da Gaucha</span>
          <span className="siteBrandTag">self service à vontade</span>
        </Link>

        <nav aria-label="Navegação" className="siteNav">
          <Link
            className="btn btnGhost"
            to="/"
            onClick={goToHomeTop}
            aria-label="Ir para o início (hero)"
          >
            Início
          </Link>
          <Link
            className="btn btnGhost"
            to={{ pathname: "/", hash: "sobre" }}
            preventScrollReset
          >
            Sobre
          </Link>
          <Link
            className="btn btnGhost"
            to={{ pathname: "/", hash: "comoFunciona" }}
            preventScrollReset
          >
            Como pedir
          </Link>
          <Link className="btn btnGhost" to="/localizacao">
            Localização
          </Link>
          <Link
            className="btn btnGhost"
            to={{ pathname: "/", hash: "contato" }}
            preventScrollReset
          >
            Contato
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

