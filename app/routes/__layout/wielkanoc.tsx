import type { LinksFunction } from "@remix-run/node";

import wielkanocStyles from "~/styles/wielkanoc.css";

export default function WielkanocPage() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu na Wielkanoc 2023
        </h1>
      </header>
      <section className="menu-section container container--default">
        <h2 className="menu-heading-secondary">🍖 Mięsa</h2>
        <table className="menu-table">
          <tr>
            <td>Pieczeń z karkówki</td>
            <td>45 zł/kg</td>
          </tr>
          <tr>
            <td>Karkówka ze śliwką</td>
            <td>50 zł/kg</td>
          </tr>
          <tr>
            <td>Schab ze śliwką/morelą</td>
            <td>50 zł/kg</td>
          </tr>
          <tr>
            <td>Pasztet pieczony z żurawiną</td>
            <td>55 zł/kg</td>
          </tr>
          <tr>
            <td>Pasztet z żurawiną w cieście francuskim</td>
            <td>65 zł/kg</td>
          </tr>
          <tr>
            <td>Udko kacze w pomarańczach</td>
            <td>18 zł/szt.</td>
          </tr>
          <tr>
            <td>Kaczka pieczona faszerowana</td>
            <td>90 zł/szt.</td>
          </tr>
          <tr>
            <td>Zraz wołowy</td>
            <td>20 zł/szt.</td>
          </tr>
          <tr>
            <td>Zraz wieprzowy</td>
            <td>13 zł/szt.</td>
          </tr>
          <tr>
            <td>Kotlet devolaile</td>
            <td>13 zł/szt.</td>
          </tr>
          <tr>
            <td>Roladka drobiowa ze szpinakiem i fetą</td>
            <td>14 zł/szt.</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🍲 Zupy, bigos</h2>
        <table className="menu-table">
          <tr>
            <td>Żurek z białą kiełbasą</td>
            <td>30 zł/litr</td>
          </tr>
          <tr>
            <td>Barszcz biały</td>
            <td>30 zł/litr</td>
          </tr>
          <tr>
            <td>Zupa chrzanowa</td>
            <td>30 zł/litr</td>
          </tr>
          <tr>
            <td>Bigos</td>
            <td>25 zł/kg</td>
          </tr>
        </table>

        <h2 className="menu-heading-secondary">🍢 Przekąski</h2>
        <table className="menu-table">
          <tr>
            <td>Szynka ze szparagami</td>
            <td>6 zł/szt.</td>
          </tr>
          <tr>
            <td>Szynka po rusku</td>
            <td>6 zł/szt.</td>
          </tr>
          <tr>
            <td>Szynka z jajkiem</td>
            <td>6 zł/szt.</td>
          </tr>
          <tr>
            <td>Schab po warszawsku</td>
            <td>10 zł/szt.</td>
          </tr>
          <tr>
            <td>Galaretki drobiowe</td>
            <td>5 zł/szt.</td>
          </tr>
          <tr>
            <td>Sałatka jarzynowa</td>
            <td>30 zł/kg</td>
          </tr>
          <tr>
            <td>Karkówka w sosie tatarskim</td>
            <td>6 zł/szt.</td>
          </tr>
        </table>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: wielkanocStyles },
];
