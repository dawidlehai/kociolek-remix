import type { LinksFunction, MetaFunction } from "@remix-run/node";

import daniaDniaStyles from "~/styles/menu-page.scss";

export const meta: MetaFunction = () => ({
  title: "Dania dnia – Kociołek",
  "og:url": "https://kociolekbydgoszcz.pl/dania-dnia",
  "og:title": "Dania dnia – Kociołek",
});

export default function DaniaDnia() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Dania dnia na bieżący tydzień
        </h1>
      </header>
      <section className="menu-section container container--default">
        <img src="/img/menu/dania-dnia-1.jpg" alt="Menu" />

        <p className="menu-info">
          Obiady serwujemy od poniedziałku do piątku w godzinach 12-17.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
