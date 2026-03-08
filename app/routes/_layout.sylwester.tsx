import type { LinksFunction, MetaFunction } from "@remix-run/node";

import wielkanocStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Kociołek – Menu na Sylwestra 2025/2026" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/sylwester" },
  { property: "og:title", content: "Kociołek – Menu na Sylwestra 2025/2026" },
];

export default function WielkanocPage() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu na Sylwestra 2025/2026
        </h1>
      </header>
      <section className="menu-section container container--default">
        <p className="menu-info-top">
          Wszystkie dania podawane w stole szwedzkim, dostępne przez całą noc.
          <br />O północy lampka szampana dla wszystkich gości.
          <br />
          <strong>Alkohol oraz napoje gazowane we własnym zakresie.</strong>
        </p>

        <h2 className="menu-heading-secondary">🍲 Bufet gorący</h2>
        <table className="menu-table">
          <tr>
            <td>Krem z białych warzyw</td>
          </tr>
          <tr>
            <td>Zupa gulaszowa</td>
          </tr>
          <tr>
            <td>Zraz wieprzowy</td>
          </tr>
          <tr>
            <td>Kaczka w żurawinie</td>
          </tr>
          <tr>
            <td>Polędwiczki wieprzowe w sosie kurkowym</td>
          </tr>
          <tr>
            <td>Kurczak w cieście piwnym</td>
          </tr>
          <tr>
            <td>Sandacz na borowikach</td>
          </tr>
          <tr>
            <td>Ziemniaki z wody</td>
          </tr>
          <tr>
            <td>Smażony makaron z warzywami</td>
          </tr>
          <tr>
            <td>Kuleczki ziemniaczane</td>
          </tr>
          <tr>
            <td>Zestaw surówek</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🥗 Bufet zimny</h2>
        <table className="menu-table">
          <tr>
            <td>Tatar wołowy na grzankach</td>
          </tr>
          <tr>
            <td>Szparagi w szynce</td>
          </tr>
          <tr>
            <td>Wytrawne babeczki z pastami</td>
          </tr>
          <tr>
            <td>Śledzik w oleju</td>
          </tr>
          <tr>
            <td>Galaretki drobiowe</td>
          </tr>
          <tr>
            <td>Ślimaki z ciasta francuskiego</td>
          </tr>
          <tr>
            <td>Sałatka grecka</td>
          </tr>
          <tr>
            <td>Sałatka ryżowa z kurczakiem</td>
          </tr>
          <tr>
            <td>Sałatka makaronowa z suszonymi pomidorami</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🧁 Bufet słodki</h2>
        <table className="menu-table">
          <tr>
            <td>Kolorowe mini deserki</td>
          </tr>
          <tr>
            <td>Sernik ambasador</td>
          </tr>
          <tr>
            <td>Szarlotka</td>
          </tr>
          <tr>
            <td>Kawa, herbata</td>
          </tr>
          <tr>
            <td>Napój jabłkowy, pomarańczowy, woda mineralna</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🍖 Stół wiejski</h2>
        <table className="menu-table">
          <tr>
            <td>Flaczki wołowe</td>
          </tr>
          <tr>
            <td>Żurek</td>
          </tr>
          <tr>
            <td>Chleb ze smalcem</td>
          </tr>
          <tr>
            <td>Pasztety</td>
          </tr>
          <tr>
            <td>Wędliny</td>
          </tr>
          <tr>
            <td>Sery</td>
          </tr>
        </table>

        <img
          className="menu-img margin-bottom"
          src="/img/plakat-sylwester-2025.jpg"
          alt="Plakat Sylwester 2025/2026"
        />
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: wielkanocStyles },
];
