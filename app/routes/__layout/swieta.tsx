import type { LinksFunction, MetaFunction } from "@remix-run/node";

import wielkanocStyles from "~/styles/wielkanoc.css";

export const meta: MetaFunction = () => ({
  title: "Kociołek – Menu na Święta Bożego Narodzenia 2023",
  "og:url": "https://kociolekbydgoszcz.pl/swieta",
  "og:title": "Kociołek –  na Święta Bożego Narodzenia 2023",
  "og:image": "https://kociolekbydgoszcz.pl/img/wielkanoc.png",
  "og:image:alt": "Stół pełen pysznego jedzenia cateringowego",
});

export default function WielkanocPage() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu na Święta Bożego Narodzenia 2023
        </h1>
      </header>
      <section className="menu-section container container--default">
        <h2 className="menu-heading-secondary"></h2>
        <table className="menu-table">
          <tr>
            <td>Dzwonek karpia smażony na maśle</td>
            <td>18 zł/sztuka (150 gram)</td>
          </tr>
          <tr>
            <td>Dorsz panierowany</td>
            <td>18 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Miruna w cieście serowym</td>
            <td>15 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Łosoś pieczony w porach</td>
            <td>18 zł/sztuka (120 gram)</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary"></h2>
        <table className="menu-table">
          <tr>
            <td>Pstrąg w galarecie (w całości)</td>
            <td>40 zł/sztuka</td>
          </tr>
          <tr>
            <td>Łosoś w galarecie</td>
            <td>12 zł/sztuka</td>
          </tr>
          <tr>
            <td>Ryba po grecku</td>
            <td>55 zł/kilogram</td>
          </tr>
          <tr>
            <td>Ryba po hawajsku</td>
            <td>55 zł/kilogram</td>
          </tr>
          <tr>
            <td>Szynka po rusku</td>
            <td>7 zł/sztuka</td>
          </tr>
          <tr>
            <td>Szynka ze szparagami</td>
            <td>8 zł/sztuka</td>
          </tr>
          <tr>
            <td>Galaretki drobiowe</td>
            <td>5 zł/sztuka</td>
          </tr>
          <tr>
            <td>Dorsz w galarecie pod porową pierzynką</td>
            <td>10 zł/sztuka</td>
          </tr>
          <tr>
            <td>Sałatka jarzynowa</td>
            <td>35 zł/kilogram</td>
          </tr>
          <tr>
            <td>Bigos</td>
            <td>35 zł/kilogram</td>
          </tr>
          <tr>
            <td>Paszteciki z mięsem</td>
            <td>4 zł/sztuka</td>
          </tr>
          <tr>
            <td>Paszteciki z kapustą i grzybami</td>
            <td>4 zł/sztuka</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary"></h2>
        <table className="menu-table">
          <tr>
            <td>Barszcz czerwony</td>
            <td>30 zł/litr</td>
          </tr>
          <tr>
            <td>Zupa grzybowa</td>
            <td>40 zł/litr</td>
          </tr>
          <tr>
            <td>Krem z borowików</td>
            <td>55 zł/litr</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary"></h2>
        <table className="menu-table">
          <tr>
            <td>Kotlet de volaille</td>
            <td>13 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Zraz wieprzowy</td>
            <td>13 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Zraz wołowy</td>
            <td>18 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Udziec ze śliwką</td>
            <td>15 zł/sztuka (120 gram)</td>
          </tr>
          <tr>
            <td>Udko kacze w morelach</td>
            <td>18 zł/sztuka</td>
          </tr>
          <tr>
            <td>Kaczka faszerowana</td>
            <td>90 zł/sztuka</td>
          </tr>
          <tr>
            <td>Pieczeń karkówki ze śliwką</td>
            <td>45 zł/kilogram</td>
          </tr>
        </table>

        <p className="menu-info">
          Zamówienia prosimy składać pod numerem <strong>721 473 077</strong>{" "}
          lub w lokalu na pierwszym piętrze DK Modraczek przy ul. Ogrody 15.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: wielkanocStyles },
];
