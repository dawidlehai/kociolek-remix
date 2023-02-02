import type { NavigationLinks } from "~/types/types";
import BottomNavigation from "../navigation/BottomNavigation";

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
