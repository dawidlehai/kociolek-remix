import {
  menu_page_default
} from "/build/_shared/chunk-CD3D6YPU.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function")
    return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date)
    return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// app/routes/_layout.dania-dnia.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Dania dnia \u2013 Kocio\u0142ek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/dania-dnia" },
  { property: "og:title", content: "Dania dnia \u2013 Kocio\u0142ek" }
];
function DaniaDnia() {
  const currWeek = getWeek(new Date());
  const menuNum = (currWeek + 1) % 3 + 1;
  console.log("Aktualny tydzie\u0144", currWeek);
  console.log("Dania dnia na ten tydzie\u0144 (do soboty w\u0142\u0105cznie)", menuNum);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "menu-header menu-header--orange", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "menu-header__heading container container--default", children: "Dania dnia na bie\u017C\u0105cy tydzie\u0144" }, void 0, false, {
      fileName: "app/routes/_layout.dania-dnia.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout.dania-dnia.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "menu-section container container--default", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          className: "menu-img",
          src: `/img/menu/dania-dnia-${menuNum}-2026-01.jpg`,
          alt: "Menu"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_layout.dania-dnia.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "menu-info", children: "Ponadto w dni otwarte serwujemy r\xF3wnie\u017C sta\u0142e dania:" }, void 0, false, {
        fileName: "app/routes/_layout.dania-dnia.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          className: "menu-img",
          src: "/img/menu/menu-stale-2025-09.jpg",
          alt: "Menu"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_layout.dania-dnia.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "menu-info", children: "Obiady serwujemy od poniedzia\u0142ku do soboty w godzinach 12-17." }, void 0, false, {
        fileName: "app/routes/_layout.dania-dnia.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout.dania-dnia.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout.dania-dnia.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: menu_page_default }
];
export {
  DaniaDnia as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_layout.dania-dnia-4JYW6DU2.js.map
