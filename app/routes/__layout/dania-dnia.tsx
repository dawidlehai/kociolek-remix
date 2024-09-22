import type { LinksFunction, MetaFunction } from "@remix-run/node";

import daniaDniaStyles from "~/styles/menu-page.css";

export const meta: MetaFunction = () => ({
  title: "Dania dnia – Kociołek",
  "og:url": "https://kociolekbydgoszcz.pl/dania-dnia",
  "og:title": "Dania dnia – Kociołek",
});

export default function DaniaDnia() {
  function getWeekNumber(dateString?: string): number {
    const date = dateString ? new Date(dateString) : new Date();
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - oneJan.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const weekDiff = Math.ceil((dayDiff + (date.getDay() === 0 ? 1 : 0)) / 7);
    return weekDiff;
  }
  const week = (getWeekNumber() % 4) + 1;
  console.log("Dania dnia na tydzień", week);

  return (
    <>
      <header className="menu-header menu-header--orange">
        <h1 className="menu-header__heading container container--default">
          Dania dnia na bieżący tydzień
        </h1>
      </header>
      <section className="menu-section container container--default">
        <img
          className="menu-img"
          src={`/img/menu/dania-dnia-${week}.jpg`}
          alt="Menu"
        />
        <p className="menu-info">
          Ponadto codziennie serwujemy również stałe dania:
        </p>
        <img className="menu-img" src="/img/menu/menu.jpg" alt="Menu" />
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
