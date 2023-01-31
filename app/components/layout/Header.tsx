import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import type { NavigationLinks } from "../navigation/TopNavigation";
import TopNavigation, {
  links as topNavigationLinks,
} from "../navigation/TopNavigation";
import MenuButton from "../utils/MenuButton";
import Logo from "../svg/Logo";
import styles from "./Header.css";

interface Props extends NavigationLinks {
  sticky: boolean;
}

export default function Header({ navigationLinks, sticky }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => setShowMenu((prevState) => !prevState);

  return (
    <header className={`header background--main ${sticky && "header--sticky"}`}>
      <div className="header__container container container--max">
        <Link
          to="/"
          className="header__logo-link"
          title="Powrót do strony głównej">
          <Logo />
        </Link>
        {showMenu && <TopNavigation navigationLinks={navigationLinks} />}
        <MenuButton
          ariaLabel={showMenu ? "Zamknij menu" : "Otwórz menu"}
          className="menu-button"
          type={showMenu ? "close" : "open"}
          onClick={toggleMenuHandler}
        />
      </div>
    </header>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...topNavigationLinks(),
];
