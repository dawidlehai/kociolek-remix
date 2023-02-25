import type {
  ErrorBoundaryComponent,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";
import type { ReactNode } from "react";

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
  ICBM: "53.11238011922019, 18.033702540507413",
  "geo.position": "53.11238011922019;18.033702540507413",
  "geo.region": "PL",
  "geo.placename": "Bydgoszcz",
  "og:url": "https://kociolekbydgoszcz.pl/",
  "og:type": "website",
  "og:title": "Kociołek – Bufet w Modraczku",
  "og:image": "https://kociolekbydgoszcz.pl/img/kociolek.jpg",
  "og:image:alt": "Stół pełen pysznego jedzenia cateringowego",
  "og:description":
    "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury “Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos.",
  "og:site_name": "Kociołek – Agnieszka Tomaszewska-Le",
  "og:locale": "pl_PL",
  "google-site-verification": "8U9aVXXCdffqe80rSBnau1bCViZnAyMMF14lGSwVgH0",
});

export const links: LinksFunction = () => [
  {
    rel: "canonical",
    href: "https://kociolekbydgoszcz.pl/",
  },
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

interface Props {
  children: ReactNode;
  title?: string;
}

const Root = ({ children, title }: Props) => (
  <html lang="pl">
    <head>
      {title && <title>{title}</title>}
      <Meta />
      <Links />
    </head>
    <body id="top">
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default function App() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

const ErrorPage = ({
  heading = "404",
  message,
}: {
  heading?: string;
  message: string;
}) => (
  <main className="error">
    <img
      src="/img/logo.svg"
      style={{ width: "100%", aspectRatio: "617/171" }}
      className="error__logo"
      // @ts-ignore: fetchpriority is a relatively new attribute
      fetchpriority="high"
      alt="Logo Kociołek"
    />
    <h1 className="error__heading">{heading}</h1>
    <p className="error__message">{message}</p>
    <p className="error__back">
      Powrót na{" "}
      <Link to="/" className="error__back-link">
        stronę główną
      </Link>
      .
    </p>
  </main>
);

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Root title={`${error.name} – Kociołek`}>
      <ErrorPage heading={error.name} message={error.message} />
    </Root>
  );
};

export const CatchBoundary: CatchBoundaryComponent = () => {
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || "Podana strona nie istnieje.";

  return (
    <Root title={`404 – Kociołek`}>
      <ErrorPage message={message} />
    </Root>
  );
};
