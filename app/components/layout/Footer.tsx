import type { LinksFunction } from "@remix-run/node";

import type { NavigationLinks } from "~/types/types";
import styles from "./Footer.css";
import BottomNavigation, {
  links as BottomNavigationLinks,
} from "../navigation/BottomNavigation";

export default function Footer({ navigationLinks }: NavigationLinks) {
  return (
    <footer className="footer background--main">
      <div className="footer__container container container--default">
        <BottomNavigation navigationLinks={navigationLinks} />
        <p className="footer__credits">
          Designed and developed by{" "}
          <a
            href="https://github.com/dawidlehai/kociolek-remix"
            title="Repozytorium projektu na GitHubie">
            Dawid Le Hai
          </a>
        </p>
      </div>
    </footer>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...BottomNavigationLinks(),
];
