type HeaderProps = {
  ifoodUrl: string
}

export function Header({ ifoodUrl }: HeaderProps) {
  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <a
          href="#topo"
          aria-label="Voltar para o topo"
          className="siteBrand"
        >
          <span className="siteBrandName">Restaurante da Gaucha</span>
          <span className="siteBrandTag">self service à vontade</span>
        </a>

        <nav aria-label="Navegação" className="siteNav">
          <a className="btn btnGhost" href="#sobre">
            Sobre
          </a>
          <a className="btn btnGhost" href="#comoFunciona">
            Como pedir
          </a>
          <a className="btn btnGhost" href="#localizacao">
            Localização
          </a>
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

