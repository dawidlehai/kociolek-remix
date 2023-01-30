import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Header, { links as headerLinks } from "~/components/layout/Header";
import Footer, { links as footerLinks } from "~/components/layout/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const links: LinksFunction = () => [...headerLinks(), ...footerLinks()];
