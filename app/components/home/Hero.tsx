import { Link } from "@remix-run/react";
import { ArrowDown } from "phosphor-react";

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
      <img
        src="/img/hero.svg"
        style={{ width: "100%", aspectRatio: "3662/2951" }}
        className="hero__image"
        // @ts-ignore: fetchpriority is a relatively new attribute
        fetchpriority="high"
        alt="Grafika przedstawiająca kawiarnię"
      />
    </>
  );
}
