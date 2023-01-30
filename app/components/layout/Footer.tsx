import type { LinksFunction } from "@remix-run/node";
import styles from "./Footer.css";

export default function Footer() {
  return <footer>Footer</footer>;
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
