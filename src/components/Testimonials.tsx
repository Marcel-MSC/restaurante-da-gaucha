type Testimonial = {
  name: string
  city: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Cliente',
    city: 'Sua cidade',
    quote:
      'Comida bem temperada e buffet caprichado. Ambiente gostoso e atendimento rápido.',
  },
  {
    name: 'Cliente',
    city: 'Sua cidade',
    quote:
      'Ótima variedade no self service. Cheguei com fome e saí feliz. Voltarei mais vezes!',
  },
  {
    name: 'Cliente',
    city: 'Sua cidade',
    quote:
      'Preço justo e almoço bem servido. Dá pra montar o prato do jeitinho que eu gosto.',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="section" aria-label="Depoimentos">
      <div className="container">
        <div className="kicker">Depoimentos</div>
        <h2 className="sectionTitle">Quem prova, volta</h2>
        <p className="sectionLead">
          Um pedacinho do que a galera costuma falar quando sai daqui.
        </p>

        <div className="grid3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card">
              <h3 style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                <span>{t.name}</span>
                <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 650 }}>
                  {t.city}
                </span>
              </h3>
              <p style={{ marginTop: 10 }}>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

