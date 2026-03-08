import type { LinksFunction, MetaFunction } from "@remix-run/node";

import daniaDniaStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Oferta świąteczna – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/wigilia" },
  { property: "og:title", content: "Oferta świąteczna – Kociołek" },
];

export default function Wigilia() {
  return (
    <>
      <header className="menu-header menu-header--marine">
        <h1 className="menu-header__heading container container--default">
          Oferta świąteczna
        </h1>
      </header>
      <section className="menu-section container container--default">
        <img
          className="wigilia-img"
          src={`/img/oferta-swiateczna-2025.jpg`}
          alt="Oferta świąteczna"
        />
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
