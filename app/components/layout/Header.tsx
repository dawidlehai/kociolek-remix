import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import type { NavigationLinks } from "../navigation/TopNavigation";
import TopNavigation, {
  links as topNavigationLinks,
} from "../navigation/TopNavigation";
import Logo from "../svg/Logo";
import styles from "./Header.css";

interface Props extends NavigationLinks {
  sticky: boolean;
}

export default function Header({ navigationLinks, sticky }: Props) {
  return (
    <header className={`header background--main ${sticky && "header--sticky"}`}>
      <div className="header__container container container--max">
        <Link
          to="/"
          className="header__logo-link"
          title="Powrót do strony głównej">
          <Logo />
        </Link>
        <TopNavigation navigationLinks={navigationLinks} />
      </div>
    </header>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...topNavigationLinks(),
];
