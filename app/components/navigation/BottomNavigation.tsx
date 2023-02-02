import { Link } from "@remix-run/react";
import { ArrowUp } from "phosphor-react";

import type { NavigationLinks } from "~/types/types";

export default function BottomNavigation({ navigationLinks }: NavigationLinks) {
  return (
    <nav className="footer-navigation">
      <ul className="footer-navigation__ul">
        <li key="top">
          <Link
            to="#top"
            className="footer-navigation__link footer-navigation__to-top">
            Na górę <ArrowUp weight="bold" />
          </Link>
        </li>
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <Link to={link.href} className="footer-navigation__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
