import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "/build/_shared/chunk-7FLSDLMP.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/main.css?url
var main_default = "/build/_assets/main-24MU5NI7.css?url";

// app/faviconLinks.ts
var faviconsPath = "/img/favicons";
var generateFavicons = (sizes) => sizes.map((size) => ({
  rel: "icon",
  type: "image/png",
  href: `${faviconsPath}/favicon-${size}.png`,
  sizes: `${size}`
}));
var faviconLinks_default = [
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

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { charset: "utf-8" },
  { title: "Kocio\u0142ek \u2013 Bufet w Modraczku" },
  {
    name: "description",
    content: "Kocio\u0142ek to bufet i kawiarnia umieszczona na pierwszym pi\u0119trze Domu Kultury \u201EModraczek\u201D, na Wy\u017Cynach w Bydgoszczy. Jest to wspania\u0142e miejsce spotka\u0144, w kt\xF3rym mo\u017Cesz zorganizowa\u0107 dowoln\u0105 imprez\u0119 okoliczno\u015Bciow\u0105 wraz z profesjonaln\u0105 obs\u0142ug\u0105 cateringow\u0105, zje\u015B\u0107 pyszne posi\u0142ki obiadowe, a tak\u017Ce zam\xF3wi\u0107 wybrane potrawy i dania garma\u017Ceryjne na wynos."
  },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
  { name: "ICBM", content: "53.11238011922019, 18.033702540507413" },
  { name: "geo.position", content: "53.11238011922019;18.033702540507413" },
  { name: "geo.region", content: "PL" },
  { name: "geo.placename", content: "Bydgoszcz" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Kocio\u0142ek \u2013 Bufet w Modraczku" },
  { property: "og:image", content: "https://kociolekbydgoszcz.pl/img/kociolek.jpg" },
  { property: "og:image:alt", content: "St\xF3\u0142 pe\u0142en pysznego jedzenia cateringowego" },
  {
    property: "og:description",
    content: "Kocio\u0142ek to bufet i kawiarnia umieszczona na pierwszym pi\u0119trze Domu Kultury \u201EModraczek\u201D, na Wy\u017Cynach w Bydgoszczy. Jest to wspania\u0142e miejsce spotka\u0144, w kt\xF3rym mo\u017Cesz zorganizowa\u0107 dowoln\u0105 imprez\u0119 okoliczno\u015Bciow\u0105 wraz z profesjonaln\u0105 obs\u0142ug\u0105 cateringow\u0105, zje\u015B\u0107 pyszne posi\u0142ki obiadowe, a tak\u017Ce zam\xF3wi\u0107 wybrane potrawy i dania garma\u017Ceryjne na wynos."
  },
  { property: "og:site_name", content: "Kocio\u0142ek \u2013 Agnieszka Tomaszewska-Le" },
  { property: "og:locale", content: "pl_PL" },
  {
    name: "google-site-verification",
    content: "8U9aVXXCdffqe80rSBnau1bCViZnAyMMF14lGSwVgH0"
  }
];
var links = () => [
  {
    rel: "stylesheet",
    href: main_default
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
  ...faviconLinks_default
];
var Root = ({ children, title }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "pl", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
    title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { id: "top", children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/root.tsx",
  lineNumber: 77,
  columnNumber: 3
}, this);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
var ErrorPage = ({
  heading = "404",
  message
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "error", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      src: "/img/logo.svg",
      style: { width: "100%", aspectRatio: "617/171" },
      className: "error__logo",
      fetchPriority: "high",
      alt: "Logo Kocio\u0142ek"
    },
    void 0,
    false,
    {
      fileName: "app/root.tsx",
      lineNumber: 108,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "error__heading", children: heading }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "error__message", children: message }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "error__back", children: [
    "Powr\xF3t na",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "error__back-link", children: "stron\u0119 g\u0142\xF3wn\u0105" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this),
    "."
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/root.tsx",
  lineNumber: 107,
  columnNumber: 3
}, this);
function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    const message = error.data?.message || "Podana strona nie istnieje.";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { title: `${error.status} \u2013 Kocio\u0142ek`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorPage, { heading: String(error.status), message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this);
  }
  if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { title: `${error.name} \u2013 Kocio\u0142ek`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorPage, { heading: error.name, message: error.message }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, { title: "B\u0142\u0105d \u2013 Kocio\u0142ek", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorPage, { message: "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d." }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 149,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-VNFFXD5V.js.map
