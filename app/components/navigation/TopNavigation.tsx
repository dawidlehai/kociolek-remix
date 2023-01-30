import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from "./TopNavigation.css";

export type NavigationLinks = {
  navigationLinks: {
    label: string;
    href: string;
    highlight?: boolean;
  }[];
};

export default function TopNavigation({ navigationLinks }: NavigationLinks) {
  return (
    <nav className="top-navigation">
      <ul>
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
