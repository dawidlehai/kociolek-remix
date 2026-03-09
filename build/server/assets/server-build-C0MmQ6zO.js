import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Outlet, useRouteError, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, LiveReload, Link, useOutletContext } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { getWeek } from "date-fns";
import { useState, useEffect, useRef } from "react";
import { ArrowUp, FacebookLogo, GoogleLogo, List, X, ArrowDown, Martini, Confetti, Cake, Baby, Gift, Coffee, CloudRain } from "@phosphor-icons/react/ssr";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
  );
  responseHeaders.set("Content-Type", "text/html; charset=utf-8");
  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const styles = "/assets/main-o0LL6YjP.css";
const faviconsPath = "/img/favicons";
const generateFavicons = (sizes) => sizes.map((size) => ({
  rel: "icon",
  type: "image/png",
  href: `${faviconsPath}/favicon-${size}.png`,
  sizes: `${size}`
}));
const faviconLinks = [
  ...generateFavicons([16, 32, 96, 128, 196, 228]),
  {
    rel: "icon",
    type: "image/svg+xml",
    href: `${faviconsPath}/favicon.svg`
  },
  {
    rel: "apple-touch-icon",
    href: `${faviconsPath}/apple-touch-icon.png`,
    sizes: "180"
  },
  {
    rel: "manifest",
    href: "/manifest.webmanifest"
  }
];
const meta$5 = () => [
  { charset: "utf-8" },
  { title: "Kociołek – Bufet w Modraczku" },
  {
    name: "description",
    content: "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury „Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos."
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
    content: "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury „Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos."
  },
  { property: "og:site_name", content: "Kociołek – Agnieszka Tomaszewska-Le" },
  { property: "og:locale", content: "pl_PL" },
  {
    name: "google-site-verification",
    content: "8U9aVXXCdffqe80rSBnau1bCViZnAyMMF14lGSwVgH0"
  }
];
const links$6 = () => [
  {
    rel: "stylesheet",
    href: styles
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap"
  },
  ...faviconLinks
];
const Root = ({ children, title }) => /* @__PURE__ */ jsxs("html", { lang: "pl", children: [
  /* @__PURE__ */ jsxs("head", { children: [
    title && /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx(Meta, {}),
    /* @__PURE__ */ jsx(Links, {})
  ] }),
  /* @__PURE__ */ jsxs("body", { id: "top", children: [
    children,
    /* @__PURE__ */ jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsx(Scripts, {}),
    /* @__PURE__ */ jsx(LiveReload, {})
  ] })
] });
function App() {
  return /* @__PURE__ */ jsx(Root, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const ErrorPage = ({
  heading = "404",
  message
}) => /* @__PURE__ */ jsxs("main", { className: "error", children: [
  /* @__PURE__ */ jsx(
    "img",
    {
      src: "/img/logo.svg",
      style: { width: "100%", aspectRatio: "617/171" },
      className: "error__logo",
      fetchPriority: "high",
      alt: "Logo Kociołek"
    }
  ),
  /* @__PURE__ */ jsx("h1", { className: "error__heading", children: heading }),
  /* @__PURE__ */ jsx("p", { className: "error__message", children: message }),
  /* @__PURE__ */ jsxs("p", { className: "error__back", children: [
    "Powrót na",
    " ",
    /* @__PURE__ */ jsx(Link, { to: "/", className: "error__back-link", children: "stronę główną" }),
    "."
  ] })
] });
function ErrorBoundary() {
  var _a;
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    const message = ((_a = error.data) == null ? void 0 : _a.message) || "Podana strona nie istnieje.";
    return /* @__PURE__ */ jsx(Root, { title: `${error.status} – Kociołek`, children: /* @__PURE__ */ jsx(ErrorPage, { heading: String(error.status), message }) });
  }
  if (error instanceof Error) {
    return /* @__PURE__ */ jsx(Root, { title: `${error.name} – Kociołek`, children: /* @__PURE__ */ jsx(ErrorPage, { heading: error.name, message: error.message }) });
  }
  return /* @__PURE__ */ jsx(Root, { title: "Błąd – Kociołek", children: /* @__PURE__ */ jsx(ErrorPage, { message: "Wystąpił nieoczekiwany błąd." }) });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: App,
  links: links$6,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const daniaDniaStyles = "/assets/menu-page-DYeIr0z1.css";
const meta$4 = () => [
  { title: "Dania dnia – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/dania-dnia" },
  { property: "og:title", content: "Dania dnia – Kociołek" }
];
function DaniaDnia() {
  const currWeek = getWeek(/* @__PURE__ */ new Date());
  const menuNum = (currWeek + 1) % 3 + 1;
  console.log("Aktualny tydzień", currWeek);
  console.log("Dania dnia na ten tydzień (do soboty włącznie)", menuNum);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "menu-header menu-header--orange", children: /* @__PURE__ */ jsx("h1", { className: "menu-header__heading container container--default", children: "Dania dnia na bieżący tydzień" }) }),
    /* @__PURE__ */ jsxs("section", { className: "menu-section container container--default", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "menu-img",
          src: `/img/menu/dania-dnia-${menuNum}-2026-01.jpg`,
          alt: "Menu"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "menu-info", children: "Ponadto w dni otwarte serwujemy również stałe dania:" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "menu-img",
          src: "/img/menu/menu-stale-2025-09.jpg",
          alt: "Menu"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "menu-info", children: "Obiady serwujemy od poniedziałku do soboty w godzinach 12-17." })
    ] })
  ] });
}
const links$5 = () => [
  { rel: "stylesheet", href: daniaDniaStyles }
];
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DaniaDnia,
  links: links$5,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const meta$3 = () => [
  { title: "Dania dnia – Śniadania" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/sniadania" },
  { property: "og:title", content: "Dania dnia – Śniadania" }
];
function Sniadania() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "menu-header", children: /* @__PURE__ */ jsx("h1", { className: "menu-header__heading container container--default", children: "Menu śniadaniowe" }) }),
    /* @__PURE__ */ jsxs("section", { className: "menu-section container container--default", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "menu-img",
          src: "/img/menu/sniadania-2025-09.jpg",
          alt: "Menu"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "menu-info", children: "Śniadania serwujemy od poniedziałku do soboty w godzinach 8-11." })
    ] })
  ] });
}
const links$4 = () => [
  { rel: "stylesheet", href: daniaDniaStyles }
];
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sniadania,
  links: links$4,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = () => [
  { title: "Kociołek – Menu na Sylwestra 2025/2026" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/sylwester" },
  { property: "og:title", content: "Kociołek – Menu na Sylwestra 2025/2026" }
];
function WielkanocPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "menu-header", children: /* @__PURE__ */ jsx("h1", { className: "menu-header__heading container container--default", children: "Menu na Sylwestra 2025/2026" }) }),
    /* @__PURE__ */ jsxs("section", { className: "menu-section container container--default", children: [
      /* @__PURE__ */ jsxs("p", { className: "menu-info-top", children: [
        "Wszystkie dania podawane w stole szwedzkim, dostępne przez całą noc.",
        /* @__PURE__ */ jsx("br", {}),
        "O północy lampka szampana dla wszystkich gości.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("strong", { children: "Alkohol oraz napoje gazowane we własnym zakresie." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "menu-heading-secondary", children: "🍲 Bufet gorący" }),
      /* @__PURE__ */ jsxs("table", { className: "menu-table", children: [
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Krem z białych warzyw" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Zupa gulaszowa" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Zraz wieprzowy" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Kaczka w żurawinie" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Polędwiczki wieprzowe w sosie kurkowym" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Kurczak w cieście piwnym" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sandacz na borowikach" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Ziemniaki z wody" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Smażony makaron z warzywami" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Kuleczki ziemniaczane" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Zestaw surówek" }) })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "menu-heading-secondary", children: "🥗 Bufet zimny" }),
      /* @__PURE__ */ jsxs("table", { className: "menu-table", children: [
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Tatar wołowy na grzankach" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Szparagi w szynce" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Wytrawne babeczki z pastami" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Śledzik w oleju" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Galaretki drobiowe" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Ślimaki z ciasta francuskiego" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sałatka grecka" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sałatka ryżowa z kurczakiem" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sałatka makaronowa z suszonymi pomidorami" }) })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "menu-heading-secondary", children: "🧁 Bufet słodki" }),
      /* @__PURE__ */ jsxs("table", { className: "menu-table", children: [
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Kolorowe mini deserki" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sernik ambasador" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Szarlotka" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Kawa, herbata" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Napój jabłkowy, pomarańczowy, woda mineralna" }) })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "menu-heading-secondary", children: "🍖 Stół wiejski" }),
      /* @__PURE__ */ jsxs("table", { className: "menu-table", children: [
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Flaczki wołowe" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Żurek" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Chleb ze smalcem" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Pasztety" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Wędliny" }) }),
        /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { children: "Sery" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "menu-img margin-bottom",
          src: "/img/plakat-sylwester-2025.jpg",
          alt: "Plakat Sylwester 2025/2026"
        }
      )
    ] })
  ] });
}
const links$3 = () => [
  { rel: "stylesheet", href: daniaDniaStyles }
];
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WielkanocPage,
  links: links$3,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = () => [
  { title: "Oferta wielkanocna – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/wielkanoc" },
  { property: "og:title", content: "Oferta wielkanocna – Kociołek" }
];
function Wielkanoc() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "menu-header menu-header--marine", children: /* @__PURE__ */ jsx("h1", { className: "menu-header__heading container container--default", children: "Oferta wielkanocna" }) }),
    /* @__PURE__ */ jsx("section", { className: "menu-section container container--default", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "wigilia-img",
        src: `/img/wielkanoc-2026.avif`,
        alt: "Oferta wielkanocna"
      }
    ) })
  ] });
}
const links$2 = () => [
  { rel: "stylesheet", href: daniaDniaStyles }
];
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wielkanoc,
  links: links$2,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => [
  { title: "Oferta świąteczna – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/wigilia" },
  { property: "og:title", content: "Oferta świąteczna – Kociołek" }
];
function Wigilia() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "menu-header menu-header--marine", children: /* @__PURE__ */ jsx("h1", { className: "menu-header__heading container container--default", children: "Oferta świąteczna" }) }),
    /* @__PURE__ */ jsx("section", { className: "menu-section container container--default", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "wigilia-img",
        src: `/img/oferta-swiateczna-2025.jpg`,
        alt: "Oferta świąteczna"
      }
    ) })
  ] });
}
const links$1 = () => [
  { rel: "stylesheet", href: daniaDniaStyles }
];
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wigilia,
  links: links$1,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function BottomNavigation({ navigationLinks: navigationLinks2 }) {
  return /* @__PURE__ */ jsx("nav", { className: "footer-navigation", children: /* @__PURE__ */ jsxs("ul", { className: "footer-navigation__ul", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "#top",
        className: "footer-navigation__link footer-navigation__to-top",
        children: [
          "Na górę ",
          /* @__PURE__ */ jsx(ArrowUp, { weight: "bold" })
        ]
      }
    ) }, "top"),
    navigationLinks2.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "footer-navigation__link", children: link.label }) }, link.label))
  ] }) });
}
function SocialMedia() {
  return /* @__PURE__ */ jsxs("address", { className: "social", children: [
    "Znajdź nas na",
    " ",
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://www.facebook.com/kociolekbydgoszcz",
        className: "social__link",
        children: [
          /* @__PURE__ */ jsx(FacebookLogo, { weight: "fill", size: "2rem" }),
          " Facebooku"
        ]
      }
    ),
    " ",
    "oraz",
    " ",
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://www.google.com/maps/place/Kocio%C5%82ek+-+Agnieszka+Tomaszewska-Le/@53.1122481,18.0315353,17z/data=!3m1!4b1!4m6!3m5!1s0x470313031b9c823f:0x4841d8b74f0165b0!8m2!3d53.1122449!4d18.033724!16s%2Fg%2F11jt268vy2",
        className: "social__link",
        children: [
          /* @__PURE__ */ jsx(GoogleLogo, { weight: "fill", size: "2rem" }),
          " Google"
        ]
      }
    )
  ] });
}
function Footer({ navigationLinks: navigationLinks2 }) {
  return /* @__PURE__ */ jsx("footer", { className: "footer background--main", children: /* @__PURE__ */ jsxs("div", { className: "footer__container container container--default", children: [
    /* @__PURE__ */ jsx(BottomNavigation, { navigationLinks: navigationLinks2 }),
    /* @__PURE__ */ jsx(SocialMedia, {}),
    /* @__PURE__ */ jsx("p", { className: "footer__credits" })
  ] }) });
}
function TopNavigation({
  navigationLinks: navigationLinks2,
  showMobileMenu,
  onLinkClick
}) {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    if (!showMobileMenu)
      setTimeout(() => {
        setIsHidden(true);
      }, 300);
    if (showMobileMenu) setIsHidden(false);
  }, [showMobileMenu]);
  return /* @__PURE__ */ jsx("nav", { className: "top-navigation", children: /* @__PURE__ */ jsx(
    "ul",
    {
      className: `${!showMobileMenu && "hide-menu"} ${!isHidden && "display-menu"}`,
      children: navigationLinks2.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          to: link.href,
          className: `top-navigation__link ${link.highlight && "button button--white"}`,
          onClick: onLinkClick,
          children: link.label
        }
      ) }, link.label))
    }
  ) });
}
function MenuButton({
  ariaLabel,
  className,
  type,
  onClick
}) {
  return /* @__PURE__ */ jsx("button", { "aria-label": ariaLabel, className, onClick, children: type === "open" ? /* @__PURE__ */ jsx(List, { weight: "bold" }) : /* @__PURE__ */ jsx(X, { weight: "bold" }) });
}
function Header({ navigationLinks: navigationLinks2, sticky, headerRef }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenuHandler = () => setShowMenu((prevState) => !prevState);
  const hideMenuHandler = () => setShowMenu(false);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `header background--main ${sticky ? "header--sticky" : ""}`,
      ref: headerRef,
      children: /* @__PURE__ */ jsxs("div", { className: "header__container container container--max", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/#top",
            className: "header__logo-link",
            title: "Powrót do strony głównej",
            onClick: hideMenuHandler,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/img/logo.svg",
                style: { width: "100%", aspectRatio: "617/171" },
                fetchPriority: "high",
                alt: "Logo Kociołek"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          TopNavigation,
          {
            navigationLinks: navigationLinks2,
            showMobileMenu: showMenu,
            onLinkClick: toggleMenuHandler
          }
        ),
        /* @__PURE__ */ jsx(
          MenuButton,
          {
            ariaLabel: showMenu ? "Zamknij menu" : "Otwórz menu",
            className: `menu-button ${showMenu ? "menu-button--close" : "menu-button--open"}`,
            type: showMenu ? "close" : "open",
            onClick: toggleMenuHandler
          }
        )
      ] })
    }
  );
}
const useObserver = (options2) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const callbackFunction = (entries) => {
    const [entry2] = entries;
    setIsVisible(entry2.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options2);
    if (containerRef.current) observer.observe(containerRef.current);
    const containerRefClone = containerRef.current;
    return () => {
      if (containerRefClone) observer.unobserve(containerRefClone);
    };
  }, [containerRef, options2]);
  return [containerRef, isVisible];
};
const navigationLinks = [
  { label: "Na miejscu", href: "/#na-miejscu" },
  { label: "Na wynos", href: "/#na-wynos" },
  { label: "Menu", href: "/#menu" },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt", highlight: true }
];
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};
function Layout() {
  const [containerRef, isVisible] = useObserver(options);
  const headerRef = useRef(null);
  let headerHeight = 0;
  if (headerRef.current)
    headerHeight = headerRef.current.getBoundingClientRect().height;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "info", children: /* @__PURE__ */ jsx(Link, { to: "/wielkanoc", children: "Oferta wielkanocna już dostępna!" }) }),
    /* @__PURE__ */ jsx(
      Header,
      {
        navigationLinks,
        sticky: !isVisible,
        headerRef
      }
    ),
    /* @__PURE__ */ jsx(
      "main",
      {
        className: "main",
        style: { marginTop: !isVisible ? `${headerHeight}px` : "0" },
        children: /* @__PURE__ */ jsx(Outlet, { context: { observeRef: containerRef } })
      }
    ),
    /* @__PURE__ */ jsx(Footer, { navigationLinks })
  ] });
}
const useObserveRef = () => useOutletContext();
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout,
  useObserveRef
}, Symbol.toStringTag, { value: "Module" }));
function Section({
  children,
  width = "default",
  background = "none",
  sectionClass,
  containerClass,
  id,
  observeRef,
  pictureElement
}) {
  const sectionClasses = `section ${background === "main" ? "background--main" : ""} ${sectionClass || ""}`;
  const containerClasses = `section__container container container--${width} ${containerClass || ""}`;
  return /* @__PURE__ */ jsxs("section", { className: sectionClasses, id: id || "", ref: observeRef, children: [
    pictureElement || "",
    /* @__PURE__ */ jsx("div", { className: containerClasses, children })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "hero__text-group", children: [
      /* @__PURE__ */ jsxs("h1", { className: "hero__heading heading-primary", children: [
        "Pyszne i",
        " ",
        /* @__PURE__ */ jsx("span", { className: "hero__highlight highlight highlight--accent-secondary", children: "zdrowe" }),
        " ",
        "posiłki na Wyżynach w Bydgoszczy"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "hero__description", children: "Kociołek to miejsce, w którym zorganizujesz imprezę okolicznościową oraz najesz się do syta. A wszystko to dopasowane do Twoich potrzeb i wymagań dietetycznych." }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/#kontakt",
          className: "hero__button hero__button--contact button button--accent-primary",
          children: "Skontaktuj się z nami"
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/#na-miejscu",
          className: "hero__button hero__button--more button button--white",
          children: [
            "Dowiedz się więcej",
            /* @__PURE__ */ jsx(ArrowDown, { weight: "bold" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/img/hero.svg",
        style: { width: "100%", aspectRatio: "3662/2951" },
        className: "hero__image",
        fetchpriority: "high",
        alt: "Grafika przedstawiająca kawiarnię"
      }
    )
  ] });
}
function Offer() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("hgroup", { className: "offer__header", children: [
      /* @__PURE__ */ jsx("p", { className: "offer__subheading subheading", children: "Na miejscu" }),
      /* @__PURE__ */ jsx("h2", { className: "offer__heading heading-secondary", children: "Profesjonalna obsługa imprez okolicznościowych" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "offer__text-group grid--to-first-column", children: /* @__PURE__ */ jsx("p", { className: "offer__description", children: "Wesele, rocznica ślubu, a może urodziny? Z nami zorganizujesz każdą imprezę wraz z fachową obsługą cateringową i zadbasz, aby wszystko przebiegło zgodnie z oczekiwaniami Twoich gości. Zadzwoń do nas, a wspólnie ustalimy wszelkie szczegóły i znajdziemy najlepsze rozwiązania." }) }),
    /* @__PURE__ */ jsxs("ul", { className: "offer__features grid--span", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Martini, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Wesela" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Confetti, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Rocznice" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Cake, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Urodziny" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Baby, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Chrzciny" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Gift, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Uroczystości komunijne" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(Coffee, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Spotkania biznesowe" })
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { children: /* @__PURE__ */ jsx(CloudRain, {}) }),
        /* @__PURE__ */ jsx("span", { children: "Stypy" })
      ] })
    ] })
  ] });
}
function Takeaway() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("hgroup", { className: "takeaway__header grid--span", children: [
      /* @__PURE__ */ jsx("p", { className: "takeaway__subheading subheading", children: "Na wynos" }),
      /* @__PURE__ */ jsx("h2", { className: "takeaway__heading heading-secondary", children: "Dania i garmażerka na wynos" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "takeaway__text-group", children: [
      /* @__PURE__ */ jsx("p", { className: "takeaway__description", children: "Czeka Cię spotkanie z rodziną lub znajomymi w Twoim domu, ale nie masz czasu, aby coś dla nich ugotować? Nie ma problemu! U nas możesz zamówić pyszne dania obiadowe, kolacyjne lub przekąski, a my zajmiemy się ich przygotowaniem. Sprawdź nasze menu i zamów już dziś!" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "tel:+48721473077",
          className: "takeaway__button button button--accent-secondary",
          children: "Zadzwoń i zamów"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/img/takeaway.svg",
        style: { width: "100%", aspectRatio: "443/222" },
        className: "takeaway__image",
        loading: "lazy",
        decoding: "async",
        alt: "Zapakowane produkty na wynos, pączki, kawa, sałatki i lemoniada"
      }
    )
  ] });
}
function MenuItem({
  title,
  desc,
  link,
  linkText,
  color
}) {
  return /* @__PURE__ */ jsxs("article", { className: "menu-item" + (color ? " menu-item--" + color : ""), children: [
    /* @__PURE__ */ jsx("h3", { children: title }),
    /* @__PURE__ */ jsx("p", { className: "menu-item__desc", children: desc }),
    /* @__PURE__ */ jsx("a", { href: link, className: "button button--white", children: linkText })
  ] });
}
function Menu() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("hgroup", { className: "menu__header grid--span", children: [
      /* @__PURE__ */ jsx("p", { className: "menu__subheading subheading", children: "Menu" }),
      /* @__PURE__ */ jsx("h2", { className: "menu__heading heading-secondary", children: "Bogaty wybór potraw i przekąsek z różnych zakątków świata" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "menu__description", children: "Nasze menu jest bogate w przysmaki zarówno z kuchni europejskiej, jak i wschodnioazjatyckiej. Na specjalne życzenie klienta przygotowujemy również dania wegańskie, wegetariańskie czy bezglutenowe, a także inne dania i potrawy. Nie boimy się eksperymentować!" }),
    /* @__PURE__ */ jsxs("figure", { className: "menu__tag-cloud animate--from-right", children: [
      /* @__PURE__ */ jsx("span", { children: "Wegańskie" }),
      /* @__PURE__ */ jsx("span", { children: "Bez glutenu" }),
      /* @__PURE__ */ jsx("span", { children: "Wegetariańskie" }),
      /* @__PURE__ */ jsx("span", { children: "Z mięsem" }),
      /* @__PURE__ */ jsx("span", { children: "Niskobiałkowe" }),
      /* @__PURE__ */ jsx("span", { children: "Przystawki" }),
      /* @__PURE__ */ jsx("span", { children: "Wietnamskie" }),
      /* @__PURE__ */ jsx("span", { children: "Obiady" }),
      /* @__PURE__ */ jsx("span", { children: "Polskie" }),
      /* @__PURE__ */ jsx("span", { children: "Bez laktozy" }),
      /* @__PURE__ */ jsx("span", { children: "Włoskie" }),
      /* @__PURE__ */ jsx("span", { children: "Na słodko" }),
      /* @__PURE__ */ jsx("span", { children: "Francuskie" }),
      /* @__PURE__ */ jsx("span", { children: "Przekąski" }),
      /* @__PURE__ */ jsx("span", { children: "Ukraińskie" }),
      /* @__PURE__ */ jsx("span", { children: "Na słono" }),
      /* @__PURE__ */ jsx("span", { children: "Kolacje" }),
      /* @__PURE__ */ jsx("span", { children: "Wykwintne" }),
      /* @__PURE__ */ jsx("span", { children: "Smaczne" }),
      /* @__PURE__ */ jsx("span", { children: "Zdrowe" })
    ] }),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        title: "Oferta wielkanocna",
        desc: "Odetchnij w te święta i zamów nasze potrawy. Zamówienia przyjmujemy do 30 marca pod numerem tel. 721 473 077.",
        link: "/wielkanoc",
        linkText: "Sprawdź ofertę",
        color: "marine"
      }
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        title: "Dania obiadowe na miejscu",
        desc: "Sprawdź nasze dania dnia na bieżący tydzień. Przyjdź i zjedz wygodnie na miejscu od poniedziałku do soboty w godzinach 12-17.",
        link: "/dania-dnia",
        linkText: "Sprawdź nasze menu",
        color: "orange"
      }
    ),
    /* @__PURE__ */ jsx(
      MenuItem,
      {
        title: "Menu śniadaniowe na miejscu",
        desc: "Sprawdź nasze przepyszne i wychwalane menu śniadaniowe. Śniadania serwujemy od poniedziałku do soboty w godzinach 8-11.",
        link: "/sniadania",
        linkText: "Sprawdź menu śniadaniowe"
      }
    )
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("hgroup", { className: "about__header grid--span", children: [
      /* @__PURE__ */ jsx("p", { className: "about__subheading subheading", children: "O nas" }),
      /* @__PURE__ */ jsx("h2", { className: "about__heading heading-secondary", children: "Pyszne jedzenie w samym sercu Wyżyn" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "about__description", children: "Kociołek to bufet i kawiarnia umieszczona na pierwszym piętrze Domu Kultury “Modraczek”, na Wyżynach w Bydgoszczy. Jest to wspaniałe miejsce spotkań, w którym możesz zorganizować dowolną imprezę okolicznościową wraz z profesjonalną obsługą cateringową, zjeść pyszne posiłki obiadowe, a także zamówić wybrane potrawy i dania garmażeryjne na wynos." }),
    /* @__PURE__ */ jsx("p", { className: "about__description", children: "Kociołek oferuje organizację i obsługę wesel, rocznic, urodzin, chrzcin, uroczystości z okazji przyjęcia pierwszej komunii świętej, spotkań biznesowych, a także styp w nowo wyremontowanych salach. Zaplecze bufetu stanowi dobrze wyposażona kuchnia oraz doświadczona kadra kucharzy i kelnerów. Skontaktuj się z nami, a wspólnie ustalimy wszelkie szczegóły Twojej imprezy!" }),
    /* @__PURE__ */ jsxs("section", { className: "owner background--main grid--span flex flex--center animate--from-right", children: [
      /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx(
          "source",
          {
            type: "image/webp",
            srcSet: "/img/agnieszka-tomaszewska-le-w180.webp 180w, /img/agnieszka-tomaszewska-le-w300.webp 300w, /img/agnieszka-tomaszewska-le-w600.webp 600w",
            sizes: "(max-width: 968px) 180px, 300px"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/agnieszka-tomaszewska-le-w600.jpg",
            srcSet: "/img/agnieszka-tomaszewska-le-w180.jpg 180w, /img/agnieszka-tomaszewska-le-w300.jpg 300w, /img/agnieszka-tomaszewska-le-w600.jpg 600w",
            sizes: "(max-width: 968px) 180px, 300px",
            style: { maxWidth: "30rem", aspectRatio: "6/9" },
            className: "owner__image",
            loading: "lazy",
            decoding: "async",
            alt: "Uśmiechnięta kobieta po 40-stce w beżowym stroju."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "owner__text-group", children: /* @__PURE__ */ jsxs("div", { className: "owner__text-group-container", children: [
        /* @__PURE__ */ jsx("h3", { className: "owner__heading heading-tertiary", children: "A wszystko zaczęło się od Agnieszki..." }),
        /* @__PURE__ */ jsx("blockquote", { className: "owner__quote", children: "Pomysł na otwarcie własnego biznesu chodził mi już po głowie od jakiegoś czasu. Lata doświadczenia w zawodzie kucharza i setki zadowolonych klientów, którzy wracają do mnie bez względu na to gdzie pracuję, pozwoliło mi uwierzyć, że prowadzenie własnej firmy jest możliwe. Po dwóch dekadach pracy jako kucharz wreszcie mi się to udało i mogę eksperymentować w kuchni jak nigdy dotąd!" })
      ] }) })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("hgroup", { className: "contact__header grid--span", children: [
      /* @__PURE__ */ jsx("p", { className: "contact__subheading subheading", children: "Kontakt" }),
      /* @__PURE__ */ jsx("h2", { className: "contact__heading heading-secondary", children: "Skontaktuj się z nami, aby dowiedzieć się więcej" })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/img/family.svg",
        style: { width: "100%", aspectRatio: "951/575" },
        className: "contact__image",
        loading: "lazy",
        decoding: "async",
        alt: "Grafika rodziny zasiadającej przy wspólnym stoliku do posiłku"
      }
    ),
    /* @__PURE__ */ jsxs("address", { className: "contact__text-group", children: [
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/img/logo.svg",
          style: { width: "100%", aspectRatio: "617/171" },
          className: "contact__logo",
          loading: "lazy",
          decoding: "async",
          alt: "Logo Kociołek"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "contact__company-name", children: "“Kociołek” Agnieszka Tomaszewska-Le" }),
      /* @__PURE__ */ jsx("p", { className: "contact__company-address", children: "ul. Ogrody 15, 85-870 Bydgoszcz" }),
      /* @__PURE__ */ jsx("p", { className: "contact__company-details", children: "Pierwsze piętro Domu Kultury “Modraczek”" }),
      /* @__PURE__ */ jsx("p", { className: "contact__company-nip", children: "NIP: 9671025776" }),
      /* @__PURE__ */ jsxs("p", { className: "contact__company-phone", children: [
        "Numer telefonu: ",
        /* @__PURE__ */ jsx("a", { href: "tel:+48721473077", children: "+48 721 473 077" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "contact__company-mail", children: [
        "Adres e-mail:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:kociolekbydgoszcz@gmail.com?subject=Wiadomość%20ze%20strony%20kociolekbydgoszcz.pl", children: "kociolekbydgoszcz@gmail.com" })
      ] })
    ] })
  ] });
}
const homeStyles = "/assets/home-DzrlyyDl.css";
function Index() {
  const { observeRef } = useObserveRef();
  const offerBackground = /* @__PURE__ */ jsxs("picture", { className: "offer__bg-image", children: [
    /* @__PURE__ */ jsx(
      "source",
      {
        type: "image/webp",
        srcSet: "/img/wedding-w960.webp 960w, /img/wedding-w1920.webp 1920w, /img/wedding-w3840.webp 3840w"
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/img/wedding-w3840.webp",
        srcSet: "/img/wedding-w960.jpg 960w, /img/wedding-w1920.jpg 1920w, /img/wedding-w3840.jpg 3840w",
        sizes: "(max-width: 960px) 960px, 1920px",
        style: { width: "100%", aspectRatio: "128/89" },
        loading: "lazy",
        decoding: "async",
        alt: "Uroczystość, impreza okolicznościowa, kieliszki, toast"
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "hero curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-1",
        containerClass: "grid grid--2-columns grid--gap-medium",
        width: "wide",
        background: "main",
        id: "hero",
        observeRef,
        children: /* @__PURE__ */ jsx(Hero, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "offer",
        containerClass: "grid grid--gap-medium vertical-padding--large",
        id: "na-miejscu",
        pictureElement: offerBackground,
        children: /* @__PURE__ */ jsx(Offer, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "takeaway vertical-padding--large curve curve--top curve--top-shadow-line curve--bottom-shadow-line-gradient-2",
        containerClass: "takeaway__container grid grid--2-columns grid--gap-medium",
        id: "na-wynos",
        children: /* @__PURE__ */ jsx(Takeaway, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "menu vertical-padding--large",
        containerClass: "menu__container grid grid--2-columns grid--gap-medium",
        id: "menu",
        children: /* @__PURE__ */ jsx(Menu, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "about vertical-padding--large",
        containerClass: "about__container grid grid--2-columns grid--gap-medium",
        id: "o-nas",
        children: /* @__PURE__ */ jsx(About, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Section,
      {
        sectionClass: "contact vertical-padding--large curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-all",
        containerClass: "contact__container grid grid--2-columns",
        id: "kontakt",
        children: /* @__PURE__ */ jsx(Contact, {})
      }
    )
  ] });
}
const links = () => [
  { rel: "stylesheet", href: homeStyles }
];
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  links
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BhazIR_G.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/components-DcEvJMcm.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-ByjI8QR8.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/components-DcEvJMcm.js"], "css": [] }, "routes/_layout.dania-dnia": { "id": "routes/_layout.dania-dnia", "parentId": "routes/_layout", "path": "dania-dnia", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.dania-dnia-u0m67v0D.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/menu-page-BBJIuTES.js"], "css": [] }, "routes/_layout.sniadania": { "id": "routes/_layout.sniadania", "parentId": "routes/_layout", "path": "sniadania", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.sniadania-uWCww1py.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/menu-page-BBJIuTES.js"], "css": [] }, "routes/_layout.sylwester": { "id": "routes/_layout.sylwester", "parentId": "routes/_layout", "path": "sylwester", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.sylwester-CPa9RL6_.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/menu-page-BBJIuTES.js"], "css": [] }, "routes/_layout.wielkanoc": { "id": "routes/_layout.wielkanoc", "parentId": "routes/_layout", "path": "wielkanoc", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.wielkanoc-DeCXDk2l.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/menu-page-BBJIuTES.js"], "css": [] }, "routes/_layout.wigilia": { "id": "routes/_layout.wigilia", "parentId": "routes/_layout", "path": "wigilia", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout.wigilia-EP3Fusbz.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/menu-page-BBJIuTES.js"], "css": [] }, "routes/_layout._index": { "id": "routes/_layout._index", "parentId": "routes/_layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout._index-B1HpvHL4.js", "imports": ["/assets/jsx-runtime-0DLF9kdB.js", "/assets/_layout-OOILcz27.js", "/assets/components-DcEvJMcm.js"], "css": [] }, "routes/_layout": { "id": "routes/_layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_layout-BX2vdcUx.js", "imports": ["/assets/_layout-OOILcz27.js", "/assets/jsx-runtime-0DLF9kdB.js", "/assets/components-DcEvJMcm.js"], "css": [] } }, "url": "/assets/manifest-8d811e7c.js", "version": "8d811e7c" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_layout.dania-dnia": {
    id: "routes/_layout.dania-dnia",
    parentId: "routes/_layout",
    path: "dania-dnia",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_layout.sniadania": {
    id: "routes/_layout.sniadania",
    parentId: "routes/_layout",
    path: "sniadania",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_layout.sylwester": {
    id: "routes/_layout.sylwester",
    parentId: "routes/_layout",
    path: "sylwester",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/_layout.wielkanoc": {
    id: "routes/_layout.wielkanoc",
    parentId: "routes/_layout",
    path: "wielkanoc",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/_layout.wigilia": {
    id: "routes/_layout.wigilia",
    parentId: "routes/_layout",
    path: "wigilia",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/_layout._index": {
    id: "routes/_layout._index",
    parentId: "routes/_layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route6
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route7
  }
};
const build = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  assetsBuildDirectory as a,
  build as b,
  basename as c,
  entry as e,
  future as f,
  isSpaMode as i,
  mode as m,
  publicPath as p,
  routes as r,
  serverManifest as s
};
