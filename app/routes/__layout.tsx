import type { LinksFunction } from "@remix-run/node";
import { Outlet, useOutletContext } from "@remix-run/react";
import React from "react";

import type { optionsType } from "~/hooks/useObserver";
import useObserver from "~/hooks/useObserver";
import styles from "./main.css";
import Header, { links as headerLinks } from "~/components/layout/Header";
import Footer, { links as footerLinks } from "~/components/layout/Footer";

const navigationLinks = [
  { label: "Na miejscu", href: "#na-miejscu" },
  { label: "Na wynos", href: "#na-wynos" },
  { label: "Menu", href: "#menu" },
  { label: "O nas", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt", highlight: true },
];

type ContextType = { observeRef: React.MutableRefObject<null> };

const options: optionsType = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function Layout() {
  const [containerRef, isVisible] = useObserver(options);

  return (
    <>
      <Header navigationLinks={navigationLinks} sticky={!isVisible} />
      <main className="main">
        {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
        <Outlet context={{ observeRef: containerRef }} />
      </main>
      <Footer />
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...headerLinks(),
  ...footerLinks(),
];

export const useObserveRef = () => useOutletContext<ContextType>();
