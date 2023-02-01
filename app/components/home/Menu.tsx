import type { LinksFunction } from "@remix-run/node";

import styles from "./Menu.css";

export default function Menu() {
  return (
    <>
      <hgroup className="menu__header grid--span">
        <p className="menu__subheading subheading">Menu</p>
        <h2 className="menu__heading heading-secondary">
          Bogaty wybór potraw i przekąsek z różnych zakątków świata
        </h2>
      </hgroup>
      <p className="menu__description">
        Nasze menu jest bogate w przysmaki zarówno z kuchni europejskiej, jak i
        wschodnioazjatyckiej. Na specjalne życzenie klienta przygotowujemy
        również dania wegańskie, wegetariańskie czy bezglutenowe, a także inne
        dania i potrawy. Nie boimy się eksperymentować!
      </p>
      <figure className="menu__tag-cloud animate--from-right">
        <span>Wegańskie</span>
        <span>Bez glutenu</span>
        <span>Wegetariańskie</span>
        <span>Z mięsem</span>
        <span>Niskobiałkowe</span>
        <span>Przystawki</span>
        <span>Wietnamskie</span>
        <span>Obiady</span>
        <span>Polskie</span>
        <span>Bez laktozy</span>
        <span>Włoskie</span>
        <span>Na słodko</span>
        <span>Francuskie</span>
        <span>Przekąski</span>
        <span>Ukraińskie</span>
        <span>Na słono</span>
        <span>Kolacje</span>
        <span>Wykwintne</span>
        <span>Smaczne</span>
        <span>Zdrowe</span>
      </figure>
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
