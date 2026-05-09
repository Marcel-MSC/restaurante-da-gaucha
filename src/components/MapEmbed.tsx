type MapEmbedProps = {
  title: string;
  embedUrl: string;
  mapsUrl: string;
};

export function MapEmbed({ title, embedUrl, mapsUrl }: MapEmbedProps) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: 18,
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <p style={{ marginTop: 8 }}>
              Endereço: Restaurante da Gaucha - Rua Júlio Alfredo Manuel, 41 - Vila
              Reg. Feijó, São Paulo - SP, 03336-030
            </p>
          </div>
          <a
            className="btn btnGhost"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
      </div>

      <div style={{ position: "relative", width: "100%", paddingTop: "56%" }}>
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            filter: "saturate(1.05) contrast(1.05)",
          }}
        />
      </div>
    </div>
  );
}
