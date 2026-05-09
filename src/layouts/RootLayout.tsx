import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { IFOOD_URL } from "../siteConstants";

export function RootLayout() {
  return (
    <>
      <Header ifoodUrl={IFOOD_URL} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
