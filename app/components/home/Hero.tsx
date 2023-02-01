import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowDown } from "phosphor-react";

import styles from "./Hero.css";
import Cafeteria from "../svg/Cafeteria";

export default function Hero() {
  return (
    <>
      <div className="hero__text-group">
        <h1 className="hero__heading heading-primary">
          Pyszne i{" "}
          <span className="hero__highlight highlight highlight--accent-secondary">
            zdrowe
          </span>{" "}
          posiłki na Wyżynach w Bydgoszczy
        </h1>
        <p className="hero__description">
          Kociołek to miejsce, w którym zorganizujesz imprezę okolicznościową
          oraz najesz się do syta. A wszystko to dopasowane do Twoich potrzeb i
          wymagań dietetycznych.
        </p>
        <Link
          to="/#kontakt"
          className="hero__button hero__button--contact button button--accent-primary">
          Skontaktuj się z nami
        </Link>
        <Link
          to="/#na-miejscu"
          className="hero__button hero__button--more button button--white">
          Dowiedz się więcej
          <ArrowDown weight="bold" />
        </Link>
      </div>
      <Cafeteria />
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
