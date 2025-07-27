import type { LinksFunction, MetaFunction } from "@remix-run/node";
import daniaDniaStyles from "~/styles/menu-page.css";

export const meta: MetaFunction = () => ({
  title: "Dania dnia – Kociołek",
  "og:url": "https://kociolekbydgoszcz.pl/dania-dnia",
  "og:title": "Dania dnia – Kociołek",
});

export default function DaniaDnia() {
  // const currWeek = getWeek(new Date());
  // const menuNum = (currWeek % 4) + 1;
  // console.log("Aktualny tydzień", currWeek);
  // console.log("Dania dnia na ten tydzień (do soboty włącznie)", menuNum);

  return (
    <>
      <header className="menu-header menu-header--orange">
        <h1 className="menu-header__heading container container--default">
          {/* Dania dnia na bieżący tydzień */}
          Dania dnia na najbliższe dni
        </h1>
      </header>
      <section className="menu-section container container--default">
        {/* <img
          className="menu-img"
          src={`/img/menu/dania-dnia-${menuNum}.jpg`}
          alt="Menu"
        /> */}
        <img
          className="menu-img"
          src={`/img/menu/dania-dnia-4-lipiec-2025.jpg`}
          alt="Menu"
        />
        {/* <p className="menu-info">
          Ponadto codziennie serwujemy również stałe dania:
        </p>
        <img className="menu-img" src="/img/menu/menu.jpg" alt="Menu" /> */}
        <p className="menu-info">
          Obiady serwujemy od poniedziałku do piątku w godzinach 12-16.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
