import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/main.css";
import faviconLinks from "./faviconLinks";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kociołek – Bufet w Modraczku",
  description:
    "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury “Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos.",
  viewport: "width=device-width,initial-scale=1",
  "X-UA-Compatible": {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
  },
});

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap",
  },
  ...faviconLinks,
];

export default function App() {
  return (
    <html lang="pl">
      <head>
        <Meta />
        <Links />
      </head>
      <body id="top">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
