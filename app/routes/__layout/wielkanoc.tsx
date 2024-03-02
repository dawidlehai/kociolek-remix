import type { LinksFunction, MetaFunction } from "@remix-run/node";

import wielkanocStyles from "~/styles/wielkanoc.css";

export const meta: MetaFunction = () => ({
  title: "Kociołek – Menu Wielkanoc 2024",
  "og:url": "https://kociolekbydgoszcz.pl/wielkanoc",
  "og:title": "Kociołek – Menu Wielkanoc 2024",
  "og:image": "https://kociolekbydgoszcz.pl/img/wielkanoc.png",
  "og:image:alt": "Stół pełen pysznego jedzenia cateringowego",
});

export default function WielkanocPage() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu na Wielkanoc 2024
        </h1>
      </header>
      <section className="menu-section container container--default">
        {/* <h2 className="menu-heading-secondary">🍖 Mięsa</h2> */}
        <table className="menu-table">
          <tr>
            <td>Żurek z białą kiełbasą</td>
            <td>35 zł/litr</td>
          </tr>
          <tr>
            <td>Krem chrzanowy</td>
            <td>35 zł/litr</td>
          </tr>
          <tr>
            <td>Udziec z kurczaka ze śliwką</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Udko faszerowane z pieczarkami</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Zraz wieprzowy</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Kotlet de volaille</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Udko kacze w morelach</td>
            <td>18 zł/sztuka</td>
          </tr>
          <tr>
            <td>Karkówka ze śliwką</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Karkówka zapiekana z warzywami</td>
            <td>15 zł/sztuka</td>
          </tr>
          <tr>
            <td>Szynka ze szparagami</td>
            <td>7 zł/sztuka</td>
          </tr>
          <tr>
            <td>Szynka z kremem chrzanowym</td>
            <td>7 zł/sztuka</td>
          </tr>
          <tr>
            <td>Szynka z jajkiem</td>
            <td>7 zł/sztuka</td>
          </tr>
          <tr>
            <td>Szynka po rusku</td>
            <td>7 zł/sztuka</td>
          </tr>
          <tr>
            <td>Galaretki drobiowe</td>
            <td>5 zł/sztuka</td>
          </tr>
          <tr>
            <td>Schab po warszawsku</td>
            <td>9 zł/sztuka</td>
          </tr>
          <tr>
            <td>Rolada schabowa z białą kiełbasą</td>
            <td>10 zł/sztuka</td>
          </tr>
          <tr>
            <td>Sałatka jarzynowa</td>
            <td>35 zł/kg</td>
          </tr>
          <tr>
            <td>Bigos</td>
            <td>35 zł/kg</td>
          </tr>
          <tr>
            <td>Sałatka ryżowa z kurczakiem</td>
            <td>45 zł/kg</td>
          </tr>
          <tr>
            <td>Pasztet wieprzowy</td>
            <td>45 zł/kg</td>
          </tr>
          <tr>
            <td>Pasztet w cieście francuskim z żurawiną</td>
            <td>55 zł/kg</td>
          </tr>
          <tr>
            <td>Pasztecik drożdżowy z mięsem</td>
            <td>5 zł/sztuka</td>
          </tr>
        </table>

        {/* <h2 className="menu-heading-secondary">🍲 Zupy, bigos</h2>
        <h2 className="menu-heading-secondary">🍢 Przekąski</h2> */}

        <p className="menu-info">
          Zamówienia prosimy składać pod numerem <strong>721 473 077</strong> do{" "}
          <strong>22 marca</strong> 2024 roku.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: wielkanocStyles }];
