import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { ReactNode } from "react";

import styles from "~/main.css?url";
import faviconLinks from "./faviconLinks";

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "Kociołek – Bufet w Modraczku" },
  {
    name: "description",
    content:
      "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury „Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos.",
  },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  { name: "ICBM", content: "53.11238011922019, 18.033702540507413" },
  { name: "geo.position", content: "53.11238011922019;18.033702540507413" },
  { name: "geo.region", content: "PL" },
  { name: "geo.placename", content: "Bydgoszcz" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Kociołek – Bufet w Modraczku" },
  { property: "og:image", content: "https://kociolekbydgoszcz.pl/img/kociolek.jpg" },
  { property: "og:image:alt", content: "Stół pełen pysznego jedzenia cateringowego" },
  {
    property: "og:description",
    content:
      "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury „Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos.",
  },
  { property: "og:site_name", content: "Kociołek – Agnieszka Tomaszewska-Le" },
  { property: "og:locale", content: "pl_PL" },
  {
    name: "google-site-verification",
    content: "8U9aVXXCdffqe80rSBnau1bCViZnAyMMF14lGSwVgH0",
  },
];

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
      fetchPriority="high"
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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const message = error.data?.message || "Podana strona nie istnieje.";
    return (
      <Root title={`${error.status} – Kociołek`}>
        <ErrorPage heading={String(error.status)} message={message} />
      </Root>
    );
  }

  if (error instanceof Error) {
    return (
      <Root title={`${error.name} – Kociołek`}>
        <ErrorPage heading={error.name} message={error.message} />
      </Root>
    );
  }

  return (
    <Root title="Błąd – Kociołek">
      <ErrorPage message="Wystąpił nieoczekiwany błąd." />
    </Root>
  );
}
