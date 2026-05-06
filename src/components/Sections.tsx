type SectionsProps = {
  ifoodUrl: string
}

export function Sections({ ifoodUrl }: SectionsProps) {
  return (
    <>
      <section className="section" aria-label="Destaques">
        <div className="container">
          <div className="kicker">Destaques</div>
          <h2 className="sectionTitle">Um lugar com personalidade</h2>
          <p className="sectionLead">
            Buffet caprichado, ambiente acolhedor e pedido do seu jeito. Aqui é o “vai
            de novo?” sem julgamento.
          </p>

          <div className="grid3">
            <div className="card">
              <h3>Self service à vontade</h3>
              <p>
                Monte seu prato, repita, experimente. Variedade para todos os gostos.
              </p>
            </div>
            <div className="card">
              <h3>iFood</h3>
              <p>
                Pra quando bater a correria. Peça pelo iFood e receba com praticidade.
              </p>
            </div>
            <div className="card">
              <h3>Atendimento direto</h3>
              <p>
                Prefere falar com a gente? Atendimento rápido pra tirar dúvidas e
                combinar retirada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="comoFunciona" className="section" aria-label="Como pedir">
        <div className="container">
          <div className="kicker">Pedido</div>
          <h2 className="sectionTitle">Como pedir</h2>
          <p className="sectionLead">
            Escolha o canal e pronto. Se quiser, manda uma mensagem com o que você
            está com vontade hoje.
          </p>

          <div className="grid3">
            <div className="card">
              <h3>1) No balcão</h3>
              <p>
                Chegou? É só servir e aproveitar o self service à vontade. Sem
                burocracia.
              </p>
            </div>
            <div className="card">
              <h3>2) iFood</h3>
              <p>Peça pelo app e acompanhe tudo por lá.</p>
              <div style={{ marginTop: 14 }}>
                <a className="btn btnPrimary" href={ifoodUrl} target="_blank" rel="noreferrer">
                  Abrir iFood
                </a>
              </div>
            </div>
            <div className="card">
              <h3>3) Retirada</h3>
              <p>
                Prefere retirar? Chegue com calma: a gente te ajuda a escolher e montar
                o prato.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

