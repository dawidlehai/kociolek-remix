import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import Header, { links as headerLinks } from "~/components/layout/Header";
import Footer, { links as footerLinks } from "~/components/layout/Footer";

const navigationLinks = [
  { label: "Na miejscu", href: "#na-miejscu" },
  { label: "Na wynos", href: "#na-wynos" },
  { label: "Menu", href: "#menu" },
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt", highlight: true },
];

export default function Layout() {
  return (
    <>
      <Header navigationLinks={navigationLinks} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export const links: LinksFunction = () => [...headerLinks(), ...footerLinks()];
