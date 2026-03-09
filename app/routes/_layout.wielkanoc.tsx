import type { LinksFunction, MetaFunction } from "@remix-run/node";

import daniaDniaStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Oferta wielkanocna – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/wielkanoc" },
  { property: "og:title", content: "Oferta wielkanocna – Kociołek" },
];

export default function Wielkanoc() {
  return (
    <>
      <header className="menu-header menu-header--marine">
        <h1 className="menu-header__heading container container--default">
          Oferta wielkanocna
        </h1>
      </header>
      <section className="menu-section container container--default">
        <img
          className="wigilia-img"
          src={`/img/wielkanoc-2026.avif`}
          alt="Oferta wielkanocna"
        />
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
