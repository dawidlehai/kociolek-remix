import type { LinksFunction } from "@remix-run/node";
import styles from "./Header.css";

export default function Header() {
  return <header>Header</header>;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
