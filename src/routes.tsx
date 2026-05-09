import type { RouteObject } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { CardapioPage } from "./pages/CardapioPage";
import { LocalizacaoPage } from "./pages/LocalizacaoPage";
import { ContatoPage } from "./pages/ContatoPage";
import { SobrePage } from "./pages/SobrePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "cardapio", Component: CardapioPage },
      { path: "localizacao", Component: LocalizacaoPage },
      { path: "contato", Component: ContatoPage },
      { path: "sobre", Component: SobrePage },
    ],
  },
];
