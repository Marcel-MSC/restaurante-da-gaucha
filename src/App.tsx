import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sections } from "./components/Sections";
import { About } from "./components/About";
// import { Testimonials } from "./components/Testimonials";
import { MapEmbed } from "./components/MapEmbed";
import { Footer } from "./components/Footer";

function App() {
  const ifoodUrl =
    "https://www.ifood.com.br/delivery/sao-paulo-sp/o-meu-bem-vila-regente-feijo/dfbbbb17-efd7-424b-bced-f568457ed90a";
  const mapsUrl =
    "https://www.google.com/maps/place/Marmitex+no+Tatuap%C3%A9+%7C+Self-service+%7C+Gaucha+Restaurante/@-23.5533031,-46.5611827,17z/data=!4m15!1m8!3m7!1s0x94ce5e85b0ece209:0x45d21a0246a8ffa5!2sRua+J%C3%BAlio+Alfredo+Manuel,+41+-+Vila+Reg.+Feij%C3%B3,+S%C3%A3o+Paulo+-+SP,+03336-030!3b1!8m2!3d-23.5533031!4d-46.5611827!16s%2Fg%2F11bw444qtm!3m5!1s0x94ce5f007d89c8e5:0x7448914f97f3af7b!8m2!3d-23.5533509!4d-46.5611696!16s%2Fg%2F11ltnzv2w9?entry=ttu";
  const mapsEmbedUrl = "https://www.google.com/maps?q=-23.5533509,-46.5611696&z=17&output=embed";

  return (
    <>
      <Header ifoodUrl={ifoodUrl} />
      <main>
        <Hero ifoodUrl={ifoodUrl} />
        <About />
        <Sections ifoodUrl={ifoodUrl} />
        {/* <Testimonials /> */}
        <section id="localizacao" className="section" aria-label="Localização">
          <div className="container">
            <div className="kicker">Unidade</div>
            <h2 className="sectionTitle">Localização</h2>
            <p className="sectionLead">
              Estamos te esperando. Use o mapa abaixo para traçar rota ou abrir
              direto no Google Maps.
            </p>
            <div style={{ marginTop: 22 }}>
              <MapEmbed
                title="Restaurante da Gaucha no Google Maps"
                embedUrl={mapsEmbedUrl}
                mapsUrl={mapsUrl}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
