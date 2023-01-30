import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Logo from "../svg/Logo";
import styles from "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <Link
          to="/"
          className="header__logo-link"
          title="Powrót do strony głównej">
          <Logo />
        </Link>
        Header
      </div>
    </header>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
