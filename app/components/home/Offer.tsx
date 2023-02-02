import {
  Baby,
  Cake,
  CloudRain,
  Coffee,
  Confetti,
  Gift,
  Martini,
} from "phosphor-react";

export default function Offer() {
  return (
    <>
      <hgroup className="offer__header">
        <p className="offer__subheading subheading">Na miejscu</p>
        <h2 className="offer__heading heading-secondary">
          Profesjonalna obsługa imprez okolicznościowych
        </h2>
      </hgroup>
      <div className="offer__text-group grid--to-first-column">
        <p className="offer__description">
          Wesele, rocznica ślubu, a może urodziny? Z nami zorganizujesz każdą
          imprezę wraz z fachową obsługą cateringową i zadbasz, aby wszystko
          przebiegło zgodnie z oczekiwaniami Twoich gości. Zadzwoń do nas, a
          wspólnie ustalimy wszelkie szczegóły i znajdziemy najlepsze
          rozwiązania.
        </p>
      </div>
      <ul className="offer__features grid--span">
        <li>
          <i>
            <Martini />
          </i>
          <span>Wesela</span>
        </li>
        <li>
          <i>
            <Confetti />
          </i>
          <span>Rocznice</span>
        </li>
        <li>
          <i>
            <Cake />
          </i>
          <span>Urodziny</span>
        </li>
        <li>
          <i>
            <Baby />
          </i>
          <span>Chrzciny</span>
        </li>
        <li>
          <i>
            <Gift />
          </i>
          <span>Uroczystości komunijne</span>
        </li>
        <li>
          <i>
            <Coffee />
          </i>
          <span>Spotkania biznesowe</span>
        </li>
        <li>
          <i>
            <CloudRain />
          </i>
          <span>Stypy</span>
        </li>
      </ul>
    </>
  );
}
