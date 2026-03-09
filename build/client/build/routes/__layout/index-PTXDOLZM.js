import {
  ArrowDown_esm_default,
  Baby_esm_default,
  Cake_esm_default,
  CloudRain_esm_default,
  Coffee_esm_default,
  Confetti_esm_default,
  Gift_esm_default,
  Martini_esm_default,
  useObserveRef
} from "/build/_shared/chunk-NYAUDOCZ.js";
import {
  Link
} from "/build/_shared/chunk-XYI2Z7IF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/components/layout/Section.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: sectionClasses, id: id || "", ref: observeRef, children: [
    pictureElement || "",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: containerClasses, children }, void 0, false, {
      fileName: "app/components/layout/Section.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Section.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/components/home/Hero.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hero__text-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "hero__heading heading-primary", children: [
        "Pyszne i",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hero__highlight highlight highlight--accent-secondary", children: "zdrowe" }, void 0, false, {
          fileName: "app/components/home/Hero.tsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        " ",
        "posi\u0142ki na Wy\u017Cynach w Bydgoszczy"
      ] }, void 0, true, {
        fileName: "app/components/home/Hero.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "hero__description", children: "Kocio\u0142ek to miejsce, w kt\xF3rym zorganizujesz imprez\u0119 okoliczno\u015Bciow\u0105 oraz najesz si\u0119 do syta. A wszystko to dopasowane do Twoich potrzeb i wymaga\u0144 dietetycznych." }, void 0, false, {
        fileName: "app/components/home/Hero.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Link,
        {
          to: "/#kontakt",
          className: "hero__button hero__button--contact button button--accent-primary",
          children: "Skontaktuj si\u0119 z nami"
        },
        void 0,
        false,
        {
          fileName: "app/components/home/Hero.tsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Link,
        {
          to: "/#na-miejscu",
          className: "hero__button hero__button--more button button--white",
          children: [
            "Dowiedz si\u0119 wi\u0119cej",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowDown_esm_default, { weight: "bold" }, void 0, false, {
              fileName: "app/components/home/Hero.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/home/Hero.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/home/Hero.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        src: "/img/hero.svg",
        style: { width: "100%", aspectRatio: "3662/2951" },
        className: "hero__image",
        fetchpriority: "high",
        alt: "Grafika przedstawiaj\u0105ca kawiarni\u0119"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/Hero.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/home/Hero.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/home/Offer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Offer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hgroup", { className: "offer__header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "offer__subheading subheading", children: "Na miejscu" }, void 0, false, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "offer__heading heading-secondary", children: "Profesjonalna obs\u0142uga imprez okoliczno\u015Bciowych" }, void 0, false, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Offer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "offer__text-group grid--to-first-column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "offer__description", children: "Wesele, rocznica \u015Blubu, a mo\u017Ce urodziny? Z nami zorganizujesz ka\u017Cd\u0105 imprez\u0119 wraz z fachow\u0105 obs\u0142ug\u0105 cateringow\u0105 i zadbasz, aby wszystko przebieg\u0142o zgodnie z oczekiwaniami Twoich go\u015Bci. Zadzwo\u0144 do nas, a wsp\xF3lnie ustalimy wszelkie szczeg\xF3\u0142y i znajdziemy najlepsze rozwi\u0105zania." }, void 0, false, {
      fileName: "app/components/home/Offer.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/Offer.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "offer__features grid--span", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Martini_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Wesela" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Confetti_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Rocznice" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cake_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Urodziny" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Baby_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Chrzciny" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Gift_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Uroczysto\u015Bci komunijne" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Coffee_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Spotkania biznesowe" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CloudRain_esm_default, {}, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Stypy" }, void 0, false, {
          fileName: "app/components/home/Offer.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Offer.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Offer.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/Offer.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/home/Takeaway.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Takeaway() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hgroup", { className: "takeaway__header grid--span", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "takeaway__subheading subheading", children: "Na wynos" }, void 0, false, {
        fileName: "app/components/home/Takeaway.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "takeaway__heading heading-secondary", children: "Dania i garma\u017Cerka na wynos" }, void 0, false, {
        fileName: "app/components/home/Takeaway.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Takeaway.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "takeaway__text-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "takeaway__description", children: "Czeka Ci\u0119 spotkanie z rodzin\u0105 lub znajomymi w Twoim domu, ale nie masz czasu, aby co\u015B dla nich ugotowa\u0107? Nie ma problemu! U nas mo\u017Cesz zam\xF3wi\u0107 pyszne dania obiadowe, kolacyjne lub przek\u0105ski, a my zajmiemy si\u0119 ich przygotowaniem. Sprawd\u017A nasze menu i zam\xF3w ju\u017C dzi\u015B!" }, void 0, false, {
        fileName: "app/components/home/Takeaway.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "a",
        {
          href: "tel:+48721473077",
          className: "takeaway__button button button--accent-secondary",
          children: "Zadzwo\u0144 i zam\xF3w"
        },
        void 0,
        false,
        {
          fileName: "app/components/home/Takeaway.tsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/home/Takeaway.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: "/img/takeaway.svg",
        style: { width: "100%", aspectRatio: "443/222" },
        className: "takeaway__image",
        loading: "lazy",
        decoding: "async",
        alt: "Zapakowane produkty na wynos, p\u0105czki, kawa, sa\u0142atki i lemoniada"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/Takeaway.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/home/Takeaway.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/menu/MenuItem.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function MenuItem({
  title,
  desc,
  link,
  linkText,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { className: "menu-item" + (color ? " menu-item--" + color : ""), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { children: title }, void 0, false, {
      fileName: "app/components/menu/MenuItem.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "menu-item__desc", children: desc }, void 0, false, {
      fileName: "app/components/menu/MenuItem.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: link, className: "button button--white", children: linkText }, void 0, false, {
      fileName: "app/components/menu/MenuItem.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/menu/MenuItem.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/home/Menu.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hgroup", { className: "menu__header grid--span", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "menu__subheading subheading", children: "Menu" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "menu__heading heading-secondary", children: "Bogaty wyb\xF3r potraw i przek\u0105sek z r\xF3\u017Cnych zak\u0105tk\xF3w \u015Bwiata" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Menu.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "menu__description", children: "Nasze menu jest bogate w przysmaki zar\xF3wno z kuchni europejskiej, jak i wschodnioazjatyckiej. Na specjalne \u017Cyczenie klienta przygotowujemy r\xF3wnie\u017C dania wega\u0144skie, wegetaria\u0144skie czy bezglutenowe, a tak\u017Ce inne dania i potrawy. Nie boimy si\u0119 eksperymentowa\u0107!" }, void 0, false, {
      fileName: "app/components/home/Menu.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("figure", { className: "menu__tag-cloud animate--from-right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Wega\u0144skie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Bez glutenu" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Wegetaria\u0144skie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Z mi\u0119sem" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Niskobia\u0142kowe" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Przystawki" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Wietnamskie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Obiady" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Polskie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Bez laktozy" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "W\u0142oskie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Na s\u0142odko" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Francuskie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Przek\u0105ski" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Ukrai\u0144skie" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Na s\u0142ono" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Kolacje" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Wykwintne" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Smaczne" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Zdrowe" }, void 0, false, {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Menu.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      MenuItem,
      {
        title: "Dania obiadowe na miejscu",
        desc: "Sprawd\u017A nasze dania dnia na bie\u017C\u0105cy tydzie\u0144. Przyjd\u017A i zjedz wygodnie na miejscu od poniedzia\u0142ku do soboty w godzinach 12-17.",
        link: "/dania-dnia",
        linkText: "Sprawd\u017A nasze menu",
        color: "orange"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      MenuItem,
      {
        title: "Menu \u015Bniadaniowe na miejscu",
        desc: "Sprawd\u017A nasze przepyszne i wychwalane menu \u015Bniadaniowe. \u015Aniadania serwujemy od poniedzia\u0142ku do soboty w godzinach 8-11.",
        link: "/sniadania",
        linkText: "Sprawd\u017A menu \u015Bniadaniowe"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/Menu.tsx",
        lineNumber: 54,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/home/Menu.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/home/About.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("hgroup", { className: "about__header grid--span", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "about__subheading subheading", children: "O nas" }, void 0, false, {
        fileName: "app/components/home/About.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "about__heading heading-secondary", children: "Pyszne jedzenie w samym sercu Wy\u017Cyn" }, void 0, false, {
        fileName: "app/components/home/About.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/About.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "about__description", children: "Kocio\u0142ek to bufet i kawiarnia umieszczona na pierwszym pi\u0119trze Domu Kultury \u201CModraczek\u201D, na Wy\u017Cynach w Bydgoszczy. Jest to wspania\u0142e miejsce spotka\u0144, w kt\xF3rym mo\u017Cesz zorganizowa\u0107 dowoln\u0105 imprez\u0119 okoliczno\u015Bciow\u0105 wraz z profesjonaln\u0105 obs\u0142ug\u0105 cateringow\u0105, zje\u015B\u0107 pyszne posi\u0142ki obiadowe, a tak\u017Ce zam\xF3wi\u0107 wybrane potrawy i dania garma\u017Ceryjne na wynos." }, void 0, false, {
      fileName: "app/components/home/About.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "about__description", children: "Kocio\u0142ek oferuje organizacj\u0119 i obs\u0142ug\u0119 wesel, rocznic, urodzin, chrzcin, uroczysto\u015Bci z okazji przyj\u0119cia pierwszej komunii \u015Bwi\u0119tej, spotka\u0144 biznesowych, a tak\u017Ce styp w nowo wyremontowanych salach. Zaplecze bufetu stanowi dobrze wyposa\u017Cona kuchnia oraz do\u015Bwiadczona kadra kucharzy i kelner\xF3w. Skontaktuj si\u0119 z nami, a wsp\xF3lnie ustalimy wszelkie szczeg\xF3\u0142y Twojej imprezy!" }, void 0, false, {
      fileName: "app/components/home/About.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "owner background--main grid--span flex flex--center animate--from-right", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("picture", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "source",
          {
            type: "image/webp",
            srcSet: "/img/agnieszka-tomaszewska-le-w180.webp 180w, /img/agnieszka-tomaszewska-le-w300.webp 300w, /img/agnieszka-tomaszewska-le-w600.webp 600w",
            sizes: "(max-width: 968px) 180px, 300px"
          },
          void 0,
          false,
          {
            fileName: "app/components/home/About.tsx",
            lineNumber: 37,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            src: "/img/agnieszka-tomaszewska-le-w600.jpg",
            srcSet: "/img/agnieszka-tomaszewska-le-w180.jpg 180w, /img/agnieszka-tomaszewska-le-w300.jpg 300w, /img/agnieszka-tomaszewska-le-w600.jpg 600w",
            sizes: "(max-width: 968px) 180px, 300px",
            style: { maxWidth: "30rem", aspectRatio: "6/9" },
            className: "owner__image",
            loading: "lazy",
            decoding: "async",
            alt: "U\u015Bmiechni\u0119ta kobieta po 40-stce w be\u017Cowym stroju."
          },
          void 0,
          false,
          {
            fileName: "app/components/home/About.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/home/About.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "owner__text-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "owner__text-group-container", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "owner__heading heading-tertiary", children: "A wszystko zacz\u0119\u0142o si\u0119 od Agnieszki..." }, void 0, false, {
          fileName: "app/components/home/About.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("blockquote", { className: "owner__quote", children: "Pomys\u0142 na otwarcie w\u0142asnego biznesu chodzi\u0142 mi ju\u017C po g\u0142owie od jakiego\u015B czasu. Lata do\u015Bwiadczenia w zawodzie kucharza i setki zadowolonych klient\xF3w, kt\xF3rzy wracaj\u0105 do mnie bez wzgl\u0119du na to gdzie pracuj\u0119, pozwoli\u0142o mi uwierzy\u0107, \u017Ce prowadzenie w\u0142asnej firmy jest mo\u017Cliwe. Po dw\xF3ch dekadach pracy jako kucharz wreszcie mi si\u0119 to uda\u0142o i mog\u0119 eksperymentowa\u0107 w kuchni jak nigdy dot\u0105d!" }, void 0, false, {
          fileName: "app/components/home/About.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/About.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/home/About.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/About.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/About.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/home/Contact.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("hgroup", { className: "contact__header grid--span", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__subheading subheading", children: "Kontakt" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "contact__heading heading-secondary", children: "Skontaktuj si\u0119 z nami, aby dowiedzie\u0107 si\u0119 wi\u0119cej" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Contact.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "img",
      {
        src: "/img/family.svg",
        style: { width: "100%", aspectRatio: "951/575" },
        className: "contact__image",
        loading: "lazy",
        decoding: "async",
        alt: "Grafika rodziny zasiadaj\u0105cej przy wsp\xF3lnym stoliku do posi\u0142ku"
      },
      void 0,
      false,
      {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 10,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("address", { className: "contact__text-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "img",
        {
          src: "/img/logo.svg",
          style: { width: "100%", aspectRatio: "617/171" },
          className: "contact__logo",
          loading: "lazy",
          decoding: "async",
          alt: "Logo Kocio\u0142ek"
        },
        void 0,
        false,
        {
          fileName: "app/components/home/Contact.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-name", children: "\u201CKocio\u0142ek\u201D Agnieszka Tomaszewska-Le" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-address", children: "ul. Ogrody 15, 85-870 Bydgoszcz" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-details", children: "Pierwsze pi\u0119tro Domu Kultury \u201CModraczek\u201D" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-nip", children: "NIP: 9671025776" }, void 0, false, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-phone", children: [
        "Numer telefonu: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "tel:+48721473077", children: "+48 721 473 077" }, void 0, false, {
          fileName: "app/components/home/Contact.tsx",
          lineNumber: 40,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "contact__company-mail", children: [
        "Adres e-mail:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "mailto:kociolekbydgoszcz@gmail.com?subject=Wiadomo\u015B\u0107%20ze%20strony%20kociolekbydgoszcz.pl", children: "kociolekbydgoszcz@gmail.com" }, void 0, false, {
          fileName: "app/components/home/Contact.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/Contact.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/Contact.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/Contact.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/styles/home.css
var home_default = "/build/_assets/home-RPZQKIGH.css";

// app/routes/__layout/index.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
function Index() {
  const { observeRef } = useObserveRef();
  const offerBackground = /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("picture", { className: "offer__bg-image", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "source",
      {
        type: "image/webp",
        srcSet: "/img/wedding-w960.webp 960w, /img/wedding-w1920.webp 1920w, /img/wedding-w3840.webp 3840w"
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "img",
      {
        src: "/img/wedding-w3840.webp",
        srcSet: "/img/wedding-w960.jpg 960w, /img/wedding-w1920.jpg 1920w, /img/wedding-w3840.jpg 3840w",
        sizes: "(max-width: 960px) 960px, 1920px",
        style: { width: "100%", aspectRatio: "128/89" },
        loading: "lazy",
        decoding: "async",
        alt: "Uroczysto\u015B\u0107, impreza okoliczno\u015Bciowa, kieliszki, toast"
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__layout/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "hero curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-1",
        containerClass: "grid grid--2-columns grid--gap-medium",
        width: "wide",
        background: "main",
        id: "hero",
        observeRef,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Hero, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "offer",
        containerClass: "grid grid--gap-medium vertical-padding--large",
        id: "na-miejscu",
        pictureElement: offerBackground,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Offer, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "takeaway vertical-padding--large curve curve--top curve--top-shadow-line curve--bottom-shadow-line-gradient-2",
        containerClass: "takeaway__container grid grid--2-columns grid--gap-medium",
        id: "na-wynos",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Takeaway, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "menu vertical-padding--large",
        containerClass: "menu__container grid grid--2-columns grid--gap-medium",
        id: "menu",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Menu, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "about vertical-padding--large",
        containerClass: "about__container grid grid--2-columns grid--gap-medium",
        id: "o-nas",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(About, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Section,
      {
        sectionClass: "contact vertical-padding--large curve curve--bottom curve--bottom-shadow-line curve--bottom-shadow-line-gradient-all",
        containerClass: "contact__container grid grid--2-columns",
        id: "kontakt",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Contact, {}, void 0, false, {
          fileName: "app/routes/__layout/index.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/routes/__layout/index.tsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/__layout/index.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: home_default }
];
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/__layout/index-PTXDOLZM.js.map
