export const SITE_ORIGIN = "https://restaurantedagaucha.netlify.app";

/** Google Analytics 4 — must match the ID in index.html gtag snippet. */
export const GA_MEASUREMENT_ID = "G-1GJG0DSEYH";

/** Em `public/` — URL estável no HTML estático (SSG/Netlify). */
export const SITE_LOGO_URL = "/logo-restaurante-da-gaucha.png";

export const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-paulo-sp/o-meu-bem-vila-regente-feijo/dfbbbb17-efd7-424b-bced-f568457ed90a";

export const MAPS_URL =
  "https://www.google.com/maps/place/Marmitex+no+Tatuap%C3%A9+%7C+Self-service+%7C+Gaucha+Restaurante/@-23.5533031,-46.5611827,17z/data=!4m15!1m8!3m7!1s0x94ce5e85b0ece209:0x45d21a0246a8ffa5!2sRua+J%C3%BAlio+Alfredo+Manuel,+41+-+Vila+Reg.+Feij%C3%B3,+S%C3%A3o+Paulo+-+SP,+03336-030!3b1!8m2!3d-23.5533031!4d-46.5611827!16s%2Fg%2F11bw444qtm!3m5!1s0x94ce5f007d89c8e5:0x7448914f97f3af7b!8m2!3d-23.5533509!4d-46.5611696!16s%2Fg%2F11ltnzv2w9?entry=ttu";

export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=-23.5533509,-46.5611696&z=17&output=embed";

export const INSTAGRAM_URL =
  "https://www.instagram.com/gaucharestaurantetatuape/";

export type WhatsAppContact = {
  label: string;
  display: string;
  waMeId: string;
};

export const WHATSAPP_CONTACTS: readonly WhatsAppContact[] = [
  {
    label: "WhatsApp 1",
    display: "(11) 95761-6333",
    waMeId: "5511957616333",
  },
  {
    label: "WhatsApp 2",
    display: "(11) 96102-3784",
    waMeId: "5511961023784",
  },
  {
    label: "WhatsApp 3",
    display: "(11) 97290-9842",
    waMeId: "5511972909842",
  },
] as const;

export const WHATSAPP_PREFILL_MESSAGE = "Gostaria de realizar um pedido!";

export function whatsappUrl(waMeId: string) {
  const text = encodeURIComponent(WHATSAPP_PREFILL_MESSAGE);
  return `https://wa.me/${waMeId}?text=${text}`;
}
