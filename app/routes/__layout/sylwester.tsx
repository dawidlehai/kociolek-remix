import type { LinksFunction, MetaFunction } from "@remix-run/node";

import wielkanocStyles from "~/styles/menu-page.css";

export const meta: MetaFunction = () => ({
  title: "Kociołek – Menu na Sylwestra 2024/2025",
  "og:url": "https://kociolekbydgoszcz.pl/swieta",
  "og:title": "Kociołek – na Sylwestra 2024/2025",
  "og:image": "https://kociolekbydgoszcz.pl/img/wielkanoc.png",
  "og:image:alt": "Stół pełen pysznego jedzenia cateringowego",
});

export default function WielkanocPage() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu na Sylwestra 2024/2025
        </h1>
      </header>
      <section className="menu-section container container--default">
        <h2 className="menu-heading-secondary">🍲 Bufet gorący</h2>
        <table className="menu-table">
          <tr>
            <td>Zupa grzybowa</td>
          </tr>
          <tr>
            <td>Krem z białych warzyw</td>
          </tr>
          <tr>
            <td>Udziec z kurczaka ze śliwką otoczony bekonem</td>
          </tr>
          <tr>
            <td>Kurczak w sosie mandarynkowo-brzoskwiniowym</td>
          </tr>
          <tr>
            <td>Polędwiczki wieprzowe w sosie kurkowym</td>
          </tr>
          <tr>
            <td>Grillowany filet z kurczaka w ziołach</td>
          </tr>
          <tr>
            <td>Pieczone ziemniaki</td>
          </tr>
          <tr>
            <td>Smażony ryż z warzywami</td>
          </tr>
          <tr>
            <td>Warzywa gotowane na parze</td>
          </tr>
          <tr>
            <td>Bukiet surówek</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🧁 Bufet słodki</h2>
        <table className="menu-table">
          <tr>
            <td>Kawa, herbata</td>
          </tr>
          <tr>
            <td>Sok jabłkowy, pomarańczowy, woda mineralna</td>
          </tr>
          <tr>
            <td>Sernik tradycyjny</td>
          </tr>
          <tr>
            <td>Jabłecznik</td>
          </tr>
          <tr>
            <td>Kolorowe mini deserki</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🥗 Bufet zimny</h2>
        <table className="menu-table">
          <tr>
            <td>Szynka ze szparagami</td>
          </tr>
          <tr>
            <td>Galaretki drobiowe</td>
          </tr>
          <tr>
            <td>Sałatka grecka</td>
          </tr>
          <tr>
            <td>Sałatka ryżowa z kurczakiem</td>
          </tr>
          <tr>
            <td>Tatar wołowy na grzankach</td>
          </tr>
          <tr>
            <td>Wytrawne babeczki z pastami</td>
          </tr>
          <tr>
            <td>Przekąski z tortilli</td>
          </tr>
          <tr>
            <td>Karkówka w sosie tatarskim</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🍖 Stół wiejski</h2>
        <table className="menu-table">
          <tr>
            <td>Swojskie wędliny, smalec, ogórki, pasztety</td>
          </tr>
        </table>

        <p className="menu-info">
          Wszystkie dania podawane w stole szwedzkim, dostępne przez całą noc.
          <br />O północy lampka szampana i tort. <br />
          <strong>Alkohol oraz napoje gazowane we własnym zakresie.</strong>
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: wielkanocStyles },
];
