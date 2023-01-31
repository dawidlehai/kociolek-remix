import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";

import styles from "./TopNavigation.css";

export interface NavigationLinks {
  navigationLinks: {
    label: string;
    href: string;
    highlight?: boolean;
  }[];
}

interface Props extends NavigationLinks {
  showMobileMenu: boolean;
}

export default function TopNavigation({
  navigationLinks,
  showMobileMenu,
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
              }`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
