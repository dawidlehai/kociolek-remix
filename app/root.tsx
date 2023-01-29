import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Kociołek – Bufet i kawiarnia w Modraczku",
  description:
    "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury “Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos.",
  viewport: "width=device-width,initial-scale=1",
  "X-UA-Compatible": {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
  },
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
