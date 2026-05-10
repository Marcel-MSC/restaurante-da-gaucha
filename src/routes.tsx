import type { RouteObject } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { LocalizacaoPage } from "./pages/LocalizacaoPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "localizacao", Component: LocalizacaoPage },
    ],
  },
];
