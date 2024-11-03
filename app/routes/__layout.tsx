import type { RefObject } from "react";
import { Outlet, useOutletContext } from "@remix-run/react";
import { useRef } from "react";

import type { optionsType } from "~/hooks/useObserver";
import useObserver from "~/hooks/useObserver";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";

const navigationLinks = [
  { label: "Na miejscu", href: "/#na-miejscu" },
  { label: "Na wynos", href: "/#na-wynos" },
  { label: "Menu", href: "/#menu" },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt", highlight: true },
];

type ContextType = { observeRef: RefObject<HTMLElement> };

const options: optionsType = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function Layout() {
  const [containerRef, isVisible] = useObserver(options);
  const headerRef = useRef<HTMLElement>(null);

  let headerHeight = 0;
  if (headerRef.current)
    headerHeight = headerRef.current.getBoundingClientRect().height;

  return (
    <>
      <p className="info">
        Bilety na Sylwestra już w sprzedaży!{" "}
        <a href="/sylwester.pdf">Sprawdź!</a>
      </p>
      <Header
        navigationLinks={navigationLinks}
        sticky={!isVisible}
        headerRef={headerRef}
      />
      <main
        className="main"
        style={{ marginTop: !isVisible ? `${headerHeight}px` : "0" }}
      >
        <Outlet context={{ observeRef: containerRef }} />
      </main>
      <Footer navigationLinks={navigationLinks} />
    </>
  );
}

export const useObserveRef = () => useOutletContext<ContextType>();
