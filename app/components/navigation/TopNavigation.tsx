import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import type { NavigationLinks } from "~/types/types";
import styles from "./TopNavigation.css";

interface Props extends NavigationLinks {
  showMobileMenu: boolean;
  onLinkClick: React.MouseEventHandler;
}

export default function TopNavigation({
  navigationLinks,
  showMobileMenu,
  onLinkClick,
}: Props) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (!showMobileMenu)
      setTimeout(() => {
        setIsHidden(true);
      }, 300);
    if (showMobileMenu) setIsHidden(false);
  }, [showMobileMenu]);

  return (
    <nav className="top-navigation">
      <ul
        className={`${!showMobileMenu && "hide-menu"} ${
          !isHidden && "display-menu"
        }`}>
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className={`top-navigation__link ${
                link.highlight && "button button--white"
              }`}
              onClick={onLinkClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
