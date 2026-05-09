export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(43,26,16,0.14)" }}>
      <div
        className="container"
        style={{ padding: "28px 0", color: "var(--muted)" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--display)",
                color: "var(--heading)",
                fontWeight: 850,
                letterSpacing: "-0.4px",
                fontSize: 18,
              }}
            >
              Restaurante da Gaucha
            </div>
            <div style={{ marginTop: 8, fontSize: 13 }}>
              Horário: Segunda à Sábado • 11:00–15:00
              <div style={{ marginTop: 6, fontSize: 12, opacity: 0.95 }}>
                * Em feriados, podemos estar abertos ou não. Verifique nosso
                Instagram ou no google maps.
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, fontSize: 12, opacity: 0.9 }}>
          © {new Date().getFullYear()} Restaurante da Gaucha. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
