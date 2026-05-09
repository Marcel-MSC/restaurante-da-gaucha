import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { HydrationState } from "react-router-dom";
import { createHead, UnheadProvider } from "@unhead/react/client";
import "./styles/global.css";
import { routes } from "./routes";

const head = createHead();
const rootEl = document.getElementById("app")!;

const hydrationData = (window as Window & {
  __staticRouterHydrationData?: HydrationState;
}).__staticRouterHydrationData;

const router = createBrowserRouter(routes, { hydrationData });

const app = (
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>
);

if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
