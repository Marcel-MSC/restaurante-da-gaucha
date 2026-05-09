import { defineReactSsgConfig } from "vite-plugin-react-ssg";
import { routes } from "./src/routes";
import { SITE_ORIGIN } from "./src/siteConstants";

export default defineReactSsgConfig({
  history: "browser",
  origin: SITE_ORIGIN,
  routes,
  paths: ["/cardapio", "/localizacao", "/contato", "/sobre"],
  logLevel: "normal",
});
