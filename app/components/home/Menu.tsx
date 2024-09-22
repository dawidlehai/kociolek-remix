import MenuItem from "../menu/MenuItem";

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
      <MenuItem
        title="Dania dnia na miejscu"
        desc="Sprawdź nasze dania dnia na bieżący tydzień. Przyjdź i zjedz wygodnie na miejscu od poniedziałku do piątku w godzinach 12-17."
        link="/dania-dnia"
        linkText="Sprawdź nasze menu"
        color="orange"
      ></MenuItem>
      <MenuItem
        title="Menu śniadaniowe na miejscu"
        desc="Sprawdź nasze przepyszne i wychwalane menu śniadaniowe. Śniadania serwujemy od poniedziałku do piątku w godzinach 8-11."
        link="/sniadania"
        linkText="Sprawdź menu śniadaniowe"
      ></MenuItem>
    </>
  );
}
