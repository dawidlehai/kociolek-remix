import { Link } from "@remix-run/react";
import { useState } from "react";

import type { NavigationLinks } from "~/types/types";
import TopNavigation from "../navigation/TopNavigation";
import MenuButton from "../utils/MenuButton";

interface Props extends NavigationLinks {
  sticky: boolean;
  headerRef: React.RefObject<HTMLElement>;
}

export default function Header({ navigationLinks, sticky, headerRef }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuHandler = () => setShowMenu((prevState) => !prevState);
  const hideMenuHandler = () => setShowMenu(false);

  return (
    <header
      className={`header background--main ${sticky ? "header--sticky" : ""}`}
      ref={headerRef}>
      <div className="header__container container container--max">
        <Link
          to="/#top"
          className="header__logo-link"
          title="Powrót do strony głównej"
          onClick={hideMenuHandler}>
          <img
            src="/img/logo.svg"
            style={{ width: "100%", aspectRatio: "617/171" }}
            // @ts-ignore: fetchpriority is a relatively new attribute
            fetchpriority="high"
            alt="Logo Kociołek"
          />
        </Link>
        <TopNavigation
          navigationLinks={navigationLinks}
          showMobileMenu={showMenu}
          onLinkClick={toggleMenuHandler}
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
