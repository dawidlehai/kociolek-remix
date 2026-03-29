import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { getWeek } from "date-fns";
import daniaDniaStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Dania dnia – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/dania-dnia" },
  { property: "og:title", content: "Dania dnia – Kociołek" },
];

export default function DaniaDnia() {
  const currWeek = getWeek(new Date());
  let menuNum = ((currWeek + 1) % 3) + 1;
  console.log("Aktualny tydzień", currWeek);
  console.log("Dania dnia na ten tydzień (do soboty włącznie)", menuNum);

  const today = new Date();
  const startDate = new Date("2026-03-29");
  const endDate = new Date("2026-04-09");
  if (today >= startDate && today <= endDate) {
    console.log("Specjalne menu na Wielkanoc");
    menuNum = 4;
  }

  return (
    <>
      <header className="menu-header menu-header--orange">
        <h1 className="menu-header__heading container container--default">
          Dania dnia na bieżący tydzień
        </h1>
      </header>
      <section className="menu-section container container--default">
        <p className="margin-top">
          <strong>Uwaga!</strong> Kociołek będzie nieczynny w dniach
          01.04-09.04.2026 z powodu przerwy świątecznej. Możliwy będzie jedynie
          odbiór zamówień świątecznych.
        </p>
        <img
          className="menu-img"
          src={`/img/menu/dania-dnia-${menuNum}-2026-01.jpg`}
          alt="Menu"
        />
        {/* <img
          className="menu-img"
          src={`/img/menu/dania-dnia-1-2025-09.jpg`}
          alt="Menu"
        /> */}
        <p className="menu-info">
          Ponadto w dni otwarte serwujemy również stałe dania:
        </p>
        <img
          className="menu-img"
          src="/img/menu/menu-stale-2025-09.jpg"
          alt="Menu"
        />
        <p className="menu-info">
          Obiady serwujemy od poniedziałku do soboty w godzinach 12-17.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
