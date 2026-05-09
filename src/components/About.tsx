export function About() {
  return (
    <section id="sobre" className="section" aria-label="Sobre">
      <div className="container">
        <div className="kicker">Sobre nós</div>
        <h2 className="sectionTitle">Comida de verdade, do jeito simples</h2>
        <p className="sectionLead">
          O Restaurante da Gaucha nasceu pra deixar o almoço leve e gostoso: buffet bem cuidado,
          comida fresca e aquele clima que dá vontade de voltar.
        </p>

        <div className="grid3" style={{ marginTop: 22 }}>
          <div className="card">
            <h3>Self service à vontade</h3>
            <p>Você monta seu prato e repete com tranquilidade.</p>
          </div>
          <div className="card">
            <h3>Qualidade no dia a dia</h3>
            <p>Capricho no tempero e variedade pra não enjoar.</p>
          </div>
          <div className="card">
            <h3>Almoço garantido</h3>
            <p>Seg–Sáb, das 11:00 às 15:00.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

