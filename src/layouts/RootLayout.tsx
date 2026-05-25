import { Outlet } from "react-router-dom";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { IFOOD_URL } from "../siteConstants";

export function RootLayout() {
  return (
    <>
      <GoogleAnalytics />
      <Header ifoodUrl={IFOOD_URL} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
