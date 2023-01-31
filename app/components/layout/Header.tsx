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
  headerRef: React.RefObject<HTMLElement>;
}

export default function Header({ navigationLinks, sticky, headerRef }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [hideWithDelay, setHideWithDelay] = useState(false);

  const toggleMenuHandler = () => setShowMenu((prevState) => !prevState);

  if (sticky)
    setTimeout(() => {
      setHideWithDelay(true);
    }, 300);

  return (
    <header
      className={`header background--main ${sticky && "header--sticky"}`}
      ref={headerRef}>
      <div className="header__container container container--max">
        <Link
          to="/"
          className="header__logo-link"
          title="Powrót do strony głównej">
          <Logo />
        </Link>
        <TopNavigation
          navigationLinks={navigationLinks}
          showMobileMenu={showMenu}
        />
        <MenuButton
          ariaLabel={showMenu ? "Zamknij menu" : "Otwórz menu"}
          className={`menu-button ${
            showMenu ? "menu-button--close" : "menu-button--open"
          }`}
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
